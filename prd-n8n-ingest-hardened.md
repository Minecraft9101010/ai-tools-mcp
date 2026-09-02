# PRD: AI Tools Automated Ingest Pipeline

## What this builds

An n8n workflow on the Beelink that detects new videos from The AI Search YouTube channel, downloads transcripts, extracts tool cards via the ChatGPT proxy, commits them to the public GitHub repo, and notifies Casey on Discord. Fully hands-free. Replaces the existing handoff spec at `ai-tools/ingest/n8n-handoff-prompt.md`, which explicitly excluded AI processing.

## Hard constraints

**Docker boundary.** n8n runs inside Docker on the Beelink. Execute Command nodes and Code nodes run inside the container, not on the host. They cannot access host-installed CLIs (yt-dlp, git) or the host filesystem outside of bind-mounted paths. All host-level operations (transcript download, git push) must go through SSH nodes to localhost or through a host-side helper script called via SSH.

**processed.json is the single source of idempotency.** If it gets corrupted, deleted, or desynchronized from what's actually on GitHub, the pipeline either reprocesses old videos (duplicate card files) or skips new ones permanently. The write-then-push sequence in step 7d is ordered so that processed.json is updated only after a confirmed git push. See step 7d for the specific ordering.

**Note on SSH pattern:** n8n-operations.md recommends host-side scripts with systemd timers for host-level access. This workflow uses SSH nodes instead because n8n provides the ChatGPT proxy HTTP Request, fallback routing, Code node parsing, execution history, and Discord notifications natively. Reimplementing those in a shell script would lose more than SSH adds. The tradeoff is accepted: SSH key management inside Docker is an added dependency.

## Architecture

n8n orchestrates the full pipeline. The ChatGPT proxy call happens inside n8n via HTTP Request node (same pattern as the email classifier). Host-level operations happen via SSH to localhost.

**Deviation from n8n-operations.md:** The operations doc recommends systemd timers for host-level work. This workflow uses SSH nodes from inside Docker instead, justified in the Hard constraints section above.

### Pipeline steps

1. **Schedule Trigger**: Daily, 6:00 AM PST. The channel posts 2-3x/week; daily polling never misses anything. The RSS feed returns the 15 most recent videos, so even a week of downtime misses nothing.

2. **HTTP Request: Fetch RSS feed**
   - GET `https://www.youtube.com/feeds/videos.xml?channel_id=UCIgnGlGkVRhd4qNFcEwLL4A`
   - Returns XML with `<entry>` elements containing `<yt:videoId>`, `<title>`, `<published>`

3. **XML Parse**: Extract all entries with videoId, title, published date.

4. **SSH Node: Pull repo and read processed list**
   - SSH to localhost: `cd /home/wader/Desktop/ai-tools-mcp && git pull --ff-only && cat processed.json`
   - The pull ensures the local clone is current before reading state or writing cards. `--ff-only` fails loudly if there's a divergence instead of creating a merge commit.
   - If the pull fails (network issue, diverged history), the SSH node errors and the workflow dies. The error-alert workflow notifies Casey. This is intentional: proceeding with stale state risks overwriting cards or desynchronizing processed.json. Manual intervention (resolve the divergence, retry) is the right response.
   - Returns JSON with array of processed video IDs

5. **Code Node: Filter new videos**
   - Compare RSS entries against processed list
   - Output only entries whose videoId is not in the processed list
   - If no new videos, output empty array (workflow stops at the IF node)

6. **IF Node**: Check if new videos exist. False path ends the workflow silently (no notification needed when nothing is new).

7. **Loop (splitInBatches)**: For each new video:

   a. **SSH Node: Download transcript**
      - SSH to localhost: `yt-dlp --write-auto-sub --sub-lang en --skip-download --output "/home/wader/Desktop/ai-tools-mcp/temp/%(id)s" "https://www.youtube.com/watch?v={{ $json.videoId }}" && cat /home/wader/Desktop/ai-tools-mcp/temp/{{ $json.videoId }}.en.vtt`
      - yt-dlp appends `.en.vtt` to the output template automatically (verified). The file lands at `temp/VIDEO_ID.en.vtt`.
      - Returns the VTT transcript content in stdout
      - If yt-dlp fails (no English subs, geo-blocked), the SSH node errors. onError: continueRegularOutput. The error path logs the failure and continues to the next video.
      - Typical VTT transcript: 10-50KB for a 10-30 minute video. GPT-5.5 handles this without truncation. The Groq fallback path truncates (see Fallback architecture).

   b. **HTTP Request: ChatGPT extraction**
      - POST to `http://172.17.0.1:18080/v1/chat/completions`
      - Headers: `Authorization: Bearer $env.CHATGPT_PROXY_KEY`
      - Model: `gpt-5.5`
      - No `temperature` parameter (proxy rejects it with 400)
      - System message: the extraction prompt (see Extraction Prompt section below)
      - User message: the VTT transcript from the previous step, plus the video title and published date
      - Returns: JSON array of tool card objects

   c. **Code Node: Parse extraction response**
      - Extract the response text from `choices[0].message.content`
      - `JSON.parse()` the response. If parsing fails (model returned markdown-wrapped JSON, explanation text, or garbage), wrap in try/catch and output `{ error: true, raw: responseText }`. The downstream IF node routes parse failures to the error log path (same as yt-dlp failures) so the video is skipped but the loop continues.
      - For each card object, generate the markdown file content in the standard card format
      - Generate filename: `name.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '').replace(/-+/g, '-')` + `.md`. This handles dots, plus signs, and consecutive special characters deterministically. "GPT-4.5" becomes `gpt-45.md`, "C++" becomes `c.md`.
      - If the JSON array is empty (0 tools found, which happens for ~15% of videos per processed.json history), output `{ tools_extracted: 0, skipCommit: true }` so step 7d skips the card-write and commit but still records the video in processed.json.
      - Output: array of `{ filename, content, videoTitle, videoId, publishedDate, toolCount }` objects

   d. **SSH Node: Write cards and update state**
      - SSH to localhost with a script that runs in strict order:
        1. For each card: check if `cards/FILENAME` already exists. If yes, append the new source line to the `## Sources` section (see Duplicate handling below for the exact sed command). If no, write the full card file.
        2. `cd /home/wader/Desktop/ai-tools-mcp && git add cards/ && git commit -m "[update] Add tools from: {{ $json.videoTitle }}" && git push`
        3. Only after push succeeds: update `processed.json` with the video entry (using a jq or python one-liner to append to the `videos` array), then `git add processed.json && git commit -m "[state] Mark processed: {{ $json.videoId }}" && git push`
        4. Clean up: `rm -f /home/wader/Desktop/ai-tools-mcp/temp/{{ $json.videoId }}.en.vtt`
      - **Why two commits:** If push of cards fails, processed.json is NOT updated, so the video will be reprocessed on the next run. The duplicate-handling logic in step 1 makes reprocessing safe (sources append, not overwrite). If cards push succeeds but the processed.json push fails, the video gets reprocessed and the source-append is idempotent, which is better than marking a video processed when its cards never reached GitHub.
      - If `skipCommit` is true (0 tools), skip steps 1-2 and go straight to updating processed.json (step 3) with `tools_extracted: 0`.
      - Two commits per video (cards + state). The git history stays readable because each commit references the video title or ID.

   e. **Wait Node**: 2 seconds between videos (rate limiting for the ChatGPT proxy)

8. **Discord Notification**: After all videos are processed, send a summary to the #alert Discord thread.
   - Message format: "AI Tools Monitor: X new video(s) processed, Y tool cards added"
   - List each video title and how many tools were extracted
   - Tag Casey with `<@userId>` in the message content so it triggers a mobile push notification (per n8n-operations.md Discord patterns, plain bot messages do NOT push). Casey must be a thread member before the mention is sent.

9. **Error-alert workflow**: Wired to the workflow's error workflow setting. If any unhandled error kills the execution, Casey gets a Discord alert.

### File locations

| File | Location | Managed by |
|---|---|---|
| Tool cards | `/home/wader/Desktop/ai-tools-mcp/cards/*.md` | Pipeline (write), GitHub (canonical) |
| processed.json | `/home/wader/Desktop/ai-tools-mcp/processed.json` | Pipeline (read/write), local state |
| Temp transcripts | `/home/wader/Desktop/ai-tools-mcp/temp/` | Pipeline (write, cleaned per-video in step 7d) |
| Extraction prompt | `/home/wader/Desktop/casey-workspace/influencer-marketing/automation/prompts/ai-tools-extract.md`, bind-mounted into n8n at `/home/node/.n8n-files/prompts/ai-tools-extract.md` | Git repo (editable without workflow redeploy) |

### processed.json format

Stays the same as the existing format in casey-workspace:

```json
{
  "videos": [
    {
      "id": "pC6KHflGye0",
      "title": "Video title",
      "published": "2026-05-24",
      "processed": "2026-08-31",
      "tools_extracted": 18
    }
  ]
}
```

Migrated from `casey-workspace/ai-tools/ingest/processed.json` to the public repo clone on the Beelink. Committed to GitHub alongside cards. This deviates from n8n-operations.md's general guidance that state files stay machine-local, but this pipeline commits data (cards) to the same repo, and processed.json must survive a disk failure or clean clone. The commit noise (one extra commit per video) is acceptable for recoverability.

## Extraction Prompt

System message for the ChatGPT HTTP Request node:

```
You are an AI tool extraction system. You receive a YouTube video transcript (VTT format) and extract every AI tool, model, or product mentioned into structured JSON.

For each tool mentioned in the transcript, extract:

- name: The tool's proper name (capitalize correctly)
- description: One sentence describing what it does
- url: The tool's URL if mentioned, otherwise "not mentioned"
- pricing: one of: free, freemium, paid, open-source, unknown
- platform: one or more of: web, local, API, mobile, browser extension, desktop app
- local_friendly: yes, no, or unknown, with a brief reason
- availability: available, limited, or unreleased
- what_it_does: 2-3 sentences max
- when_to_use_it: Practical situations where this is the right pick
- source_depth: "deep-dive" if the video is primarily about this tool or spends significant time on it, "mention" if it's briefly covered in a roundup

Return a JSON array of tool objects. If no tools are found, return an empty array.

Be precise about names. Do not invent information not in the transcript. If pricing or platform is unclear from the transcript, use "unknown". Prefer extracting fewer tools with accurate information over more tools with guessed details.

Respond ONLY with valid JSON. No markdown, no explanation, no wrapper text.
```

User message template:

```
Video title: {{ videoTitle }}
Published: {{ publishedDate }}
YouTube URL: https://www.youtube.com/watch?v={{ videoId }}

Transcript:
{{ transcript }}
```

### Card file generation

The Code node converts each JSON tool object to the standard card format:

```markdown
# {{ name }}

{{ description }}

- **URL:** {{ url }}
- **Pricing:** {{ pricing }}
- **Platform:** {{ platform }}
- **Local-friendly:** {{ local_friendly }}
- **Availability:** {{ availability }}
- **Last reviewed:** {{ published_date }}

## What it does
{{ what_it_does }}

## When to use it
{{ when_to_use_it }}

## Sources
- [{{ video_title }}](https://www.youtube.com/watch?v={{ video_id }}) ({{ published_date }}) - {{ source_depth }}
```

Filename: tool name lowercased, spaces replaced with hyphens, special characters removed, `.md` extension. Example: "ACE-Step" becomes `ace-step.md`.

### Duplicate handling

If a card file already exists (tool mentioned in a previous video), append the new source line to the `## Sources` section instead of overwriting.

The SSH write script checks for file existence:
- **New card:** write the full card file.
- **Existing card:** append the source line. Implementation: `echo "- [{{ video_title }}](https://www.youtube.com/watch?v={{ video_id }}) ({{ published_date }}) - {{ source_depth }}" >> cards/FILENAME`. This works because `## Sources` is always the last section in the card format, so appending to the file appends to Sources.
- **Idempotency on reprocessing:** Before appending, `grep -q "watch?v={{ video_id }}" cards/FILENAME` checks whether this video's source line is already present. If so, skip the append. This makes reprocessing the same video safe (no duplicate source lines).

## Setup requirements

1. **SSH access to localhost from n8n Docker**: The n8n container needs SSH access to the Beelink host. This may already be configured for other workflows. If not: generate an SSH key inside the container, add the public key to `~/.ssh/authorized_keys` on the host.

2. **Public repo cloned on the Beelink**: `git clone https://github.com/Minecraft9101010/ai-tools-mcp.git /home/wader/Desktop/ai-tools-mcp` (already done in this session).

3. **Git credentials on the Beelink**: GitHub token stored in git credential store (already configured in this session).

4. **ChatGPT proxy running**: The existing `openai-api-server-via-codex` systemd service at port 18080 (already running for the email classifier).

5. **processed.json migrated**: Copy from `casey-workspace/ai-tools/ingest/processed.json` to `/home/wader/Desktop/ai-tools-mcp/processed.json`.

6. **temp/ directory and .gitignore update**: Create `/home/wader/Desktop/ai-tools-mcp/temp/`. Add `temp/` to `.gitignore` (current .gitignore only has `node_modules/` and `dist/`). processed.json is NOT gitignored; it gets committed alongside cards for recoverability.

7. **Discord channel and bot**: Use the existing Claude_Code bot and #alert thread (ID `1539435871491850290`).

8. **Error-alert workflow**: Connect to the existing error-alert workflow in n8n.

## Fallback architecture

The ChatGPT proxy is the single external dependency. Per the n8n automation skill, fallback architecture is required.

- **Primary**: HTTP Request to ChatGPT proxy at `http://172.17.0.1:18080` using GPT-5.5
- **Fallback**: HTTP Request to Groq API using `$env.GROQ_API_KEY` with the same extraction prompt. Model: `openai/gpt-oss-120b` (verified available on Groq free tier, August 2026). Transcript portion truncated to 20K chars. Groq's free tier has an 8K tokens-per-minute (TPM) rate limit, and per n8n-operations.md, a single request exceeding 8K tokens is outright rejected (not queued). Math: system prompt ~500 tokens + 20K chars transcript ~5,500 tokens + output budget ~1,500 tokens = ~7,500 tokens, under 8K. The 2-second wait between videos plus processing time ensures at most one Groq request per minute window. Remember: do NOT include `response_format: {type: "json_object"}` per n8n-operations.md (nested `}}` breaks n8n expression parser).
- **Fallback identification**: Cards extracted via Groq get a `<!-- fallback -->` comment appended so degraded runs are visible in the commit diff.
- **Architecture**: Primary HTTP Request node with `onError: continueRegularOutput` → IF node checking for error → Groq fallback HTTP Request → both paths merge into the Parse node.

Known gap from the n8n automation skill: the fallback node itself does NOT have onError handling. If Groq also fails, the error propagates and kills the execution. The error-alert workflow catches this and notifies Casey. Deploy-time curl check against both endpoints mitigates stale-model risk.

## What this does NOT do

- Does not modify the MCP server code. Card updates flow through git; users get fresh cards on their next query via the GitHub fetch.
- Does not handle multi-channel ingest. Single channel (The AI Search) only. Adding channels later: add parallel RSS fetch branches per the existing handoff spec design note.
- Does not auto-publish npm updates. npm publish only happens when the MCP server code changes, not when cards are added.

## Open decisions

### Resolved by audit

- **Git pull before state read:** Added `git pull --ff-only` in step 4. Without it, cards written against a stale local clone would conflict on push.
- **processed.json update ordering:** Reordered step 7d so processed.json is updated only after cards are successfully pushed. Prevents marking a video as processed when its cards never reached GitHub.
- **Temp file cleanup:** Added explicit cleanup in step 7d (was mentioned in the file locations table but never appeared in the pipeline steps).
- **0-tool video handling:** Added skipCommit path. ~15% of videos in the existing processed.json yielded 0 tools (explanation-only videos). These still get recorded in processed.json so they aren't reprocessed.
- **Parse failure handling:** Added try/catch path for malformed ChatGPT responses in step 7c. Logs and skips instead of crashing the loop.
- **Duplicate source idempotency:** Added grep guard before source-line append so reprocessing the same video doesn't produce duplicate source lines.
- **Groq truncation target:** Tightened from 22K to 20K chars with explicit token math showing the budget breakdown.

### Escalated to Casey

- **Prompt-file pattern.** Decided: use the prompt-file pattern. Extraction prompt lives at `influencer-marketing/automation/prompts/ai-tools-extract.md`, bind-mounted into the container via the existing prompts mount. The HTTP Request node reads the prompt at runtime via a ReadWriteFile node. Prompt iteration happens by editing the file on disk; no workflow redeploy needed.
- **casey-workspace processed.json retirement.** Decided: leave `ai-tools/ingest/processed.json` and `n8n-handoff-prompt.md` in place with deprecation notes pointing to this pipeline. Delete after the pipeline proves itself over 2+ weeks of clean operation.

### Deferred on purpose

- **GitHub contents API 1000-file ceiling.** The MCP server lists cards via `api.github.com/repos/.../contents/cards/`, which returns max 1000 files per request. At 200 cards now and ~10-45 new per week, the ceiling is 6-18 months out. No architectural impact today; when it matters, switch to the Git Trees API or paginate. Lean: defer. Confidence: 90/100. Safe because nothing else depends on the listing method.
- **Filename collision for identically-named tools from different vendors.** The current naming scheme (`name-lowercased.md`) could collide if two tools share a name. With 200 cards and no collisions yet, and duplicate handling that appends sources rather than overwrites, a collision would merge two unrelated tools into one card. Low probability, acceptable risk for now. Lean: defer. Confidence: 85/100. Safe because collision produces a visible artifact (wrong sources on a card) that's easily caught in review.

## Success criteria

1. A new video from The AI Search triggers transcript download, extraction, card commit, and Discord notification within 24 hours of publication, with zero human involvement.
2. Extracted cards match the quality and format of the 200 manually extracted cards.
3. Casey knows within minutes if the pipeline breaks (Discord error alert).
4. The pipeline can tolerate ChatGPT proxy downtime via Groq fallback without data loss.
