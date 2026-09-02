#!/usr/bin/env python3
"""Write extracted AI tool cards to the repo, handle duplicates, commit and push.

Called via SSH from n8n. Reads JSON from stdin:
{
  "videoId": "abc123",
  "videoTitle": "Video Title",
  "published": "2026-09-01",
  "processed": "2026-09-01",
  "toolCount": 5,
  "skipCommit": false,
  "isGroqFallback": false,
  "cards": [
    {
      "filename": "tool-name.md",
      "content": "# Tool Name\n...",
      "sourceLine": "- [Video Title](https://...) (2026-09-01) - deep-dive"
    }
  ]
}

Two-commit sequence (cards first, then state) ensures processed.json
is only updated after cards are successfully pushed.
"""
import json
import os
import re
import subprocess
import sys

REPO = "/home/wader/Desktop/ai-tools-mcp"
ALIAS_FILE = os.path.join(REPO, "slug-aliases.json")


def run(cmd):
    subprocess.check_call(cmd, cwd=REPO)


def normalize_slug(slug):
    """Strip non-alphanumeric for fuzzy comparison."""
    return re.sub(r'[^a-z0-9]', '', slug.replace('.md', ''))


def build_card_index():
    """Map normalized slugs to actual filenames for existing cards."""
    cards_dir = os.path.join(REPO, "cards")
    index = {}
    for f in os.listdir(cards_dir):
        if f.endswith(".md"):
            norm = normalize_slug(f)
            index[norm] = f
    return index


def load_aliases():
    """Load slug alias table (maps normalized aliases to canonical filenames)."""
    if os.path.exists(ALIAS_FILE):
        with open(ALIAS_FILE) as f:
            return json.load(f)
    return {}


def levenshtein(a, b):
    """Compute Levenshtein edit distance between two strings."""
    if len(a) < len(b):
        return levenshtein(b, a)
    if len(b) == 0:
        return len(a)
    prev = list(range(len(b) + 1))
    for i, ca in enumerate(a):
        curr = [i + 1]
        for j, cb in enumerate(b):
            curr.append(min(prev[j + 1] + 1, curr[j] + 1,
                            prev[j] + (0 if ca == cb else 1)))
        prev = curr
    return prev[-1]


def find_existing_card(filename, card_index, aliases):
    """Find the existing card file for a given generated filename.

    Returns (actual_filename, match_type) or (None, None).
    match_type: 'exact', 'normalized', 'alias', 'fuzzy'
    """
    if os.path.exists(os.path.join(REPO, "cards", filename)):
        return filename, "exact"

    norm = normalize_slug(filename)

    if norm in aliases:
        canonical = aliases[norm]
        if os.path.exists(os.path.join(REPO, "cards", canonical)):
            return canonical, "alias"

    if norm in card_index:
        return card_index[norm], "normalized"

    if len(norm) >= 5:
        best_dist = None
        best_file = None
        for existing_norm, existing_file in card_index.items():
            if len(existing_norm) < 5:
                continue
            shorter = min(len(norm), len(existing_norm))
            threshold = max(2, int(shorter * 0.15))
            dist = levenshtein(norm, existing_norm)
            if dist <= threshold and (best_dist is None or dist < best_dist):
                best_dist = dist
                best_file = existing_file
        if best_file:
            return best_file, "fuzzy"

        for existing_norm, existing_file in card_index.items():
            if len(existing_norm) < 5:
                continue
            if norm in existing_norm or existing_norm in norm:
                shorter = min(len(norm), len(existing_norm))
                longer = max(len(norm), len(existing_norm))
                if shorter >= longer * 0.90:
                    return existing_file, "normalized"

    return None, None


def main():
    data = json.load(sys.stdin)
    os.chdir(REPO)

    video_id = data["videoId"]
    video_title = data["videoTitle"]
    cards = data.get("cards", [])
    skip_commit = data.get("skipCommit", False)
    is_fallback = data.get("isGroqFallback", False)

    card_index = build_card_index()
    aliases = load_aliases()

    cards_written = 0
    cards_updated = 0
    slug_matches = []

    if not skip_commit and cards:
        for card in cards:
            filename = card["filename"]
            content = card["content"]
            if is_fallback:
                content = content.rstrip("\n") + "\n\n<!-- fallback -->\n"

            existing_file, match_type = find_existing_card(
                filename, card_index, aliases)

            if existing_file:
                path = os.path.join("cards", existing_file)
                with open(path) as f:
                    existing_content = f.read()
                if f"watch?v={video_id}" not in existing_content:
                    with open(path, "a") as f:
                        f.write(card["sourceLine"] + "\n")
                    cards_updated += 1
                if match_type != "exact":
                    slug_matches.append({
                        "generated": filename,
                        "matched": existing_file,
                        "type": match_type,
                    })
            else:
                path = os.path.join("cards", filename)
                with open(path, "w") as f:
                    f.write(content)
                cards_written += 1
                card_index[normalize_slug(filename)] = filename

        if cards_written > 0 or cards_updated > 0:
            run(["git", "add", "cards/"])
            run(["git", "commit", "-m",
                 f"[update] Add tools from: {video_title}"])
            run(["git", "push"])

    with open("processed.json") as f:
        processed = json.load(f)

    processed["videos"].append({
        "id": video_id,
        "title": video_title,
        "published": data["published"],
        "processed": data["processed"],
        "tools_extracted": len(cards),
    })

    with open("processed.json", "w") as f:
        json.dump(processed, f, indent=2)
        f.write("\n")

    run(["git", "add", "processed.json"])
    run(["git", "commit", "-m", f"[state] Mark processed: {video_id}"])
    run(["git", "push"])

    vtt = os.path.join("temp", f"{video_id}.en.vtt")
    if os.path.exists(vtt):
        os.unlink(vtt)

    desc = os.path.join("temp", f"{video_id}.description")
    if os.path.exists(desc):
        os.unlink(desc)

    print(json.dumps({
        "ok": True,
        "cardsWritten": cards_written,
        "cardsUpdated": cards_updated,
        "toolCount": len(cards),
        "slugMatches": slug_matches,
    }))


if __name__ == "__main__":
    main()
