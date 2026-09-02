import { workflow, node, trigger, sticky, newCredential, ifElse, splitInBatches, nextBatch, expr } from '@n8n/workflow-sdk';

const scheduleTrigger = trigger({
  type: 'n8n-nodes-base.scheduleTrigger',
  version: 1.3,
  config: {
    name: 'Daily 6AM PST',
    parameters: {
      rule: {
        interval: [{
          field: 'days',
          daysInterval: 1,
          triggerAtHour: 6,
          triggerAtMinute: 0
        }]
      }
    },
    position: [240, 400]
  },
  output: [{}]
});

const manualTrigger = trigger({
  type: 'n8n-nodes-base.manualTrigger',
  version: 1,
  config: { name: 'Manual Trigger', position: [240, 600] },
  output: [{}]
});

const fetchRss = node({
  type: 'n8n-nodes-base.httpRequest',
  version: 4.4,
  config: {
    name: 'Fetch RSS',
    parameters: {
      method: 'GET',
      url: 'https://www.youtube.com/feeds/videos.xml?channel_id=UCIgnGlGkVRhd4qNFcEwLL4A',
      options: {
        response: { response: { responseFormat: 'text' } }
      }
    },
    position: [540, 500]
  },
  output: [{ data: '<feed>...</feed>' }]
});

const parseXml = node({
  type: 'n8n-nodes-base.xml',
  version: 1,
  config: {
    name: 'Parse XML',
    parameters: {
      mode: 'xmlToJson',
      options: {
        explicitArray: false,
        mergeAttrs: true
      }
    },
    position: [840, 500]
  },
  output: [{ feed: { entry: [] } }]
});

const pullRepo = node({
  type: 'n8n-nodes-base.ssh',
  version: 1,
  credentials: { sshPrivateKey: newCredential('Beelink SSH') },
  config: {
    name: 'Pull Repo',
    parameters: {
      resource: 'command',
      operation: 'execute',
      authentication: 'privateKey',
      command: 'cd /home/wader/Desktop/ai-tools-mcp && git pull --ff-only 1>&2 && cat processed.json'
    },
    position: [1140, 500]
  },
  output: [{ stdout: '{"videos":[]}', stderr: '', code: 0 }]
});

const filterNew = node({
  type: 'n8n-nodes-base.code',
  version: 2,
  config: {
    name: 'Filter New Videos',
    parameters: {
      mode: 'runOnceForAllItems',
      language: 'javaScript',
      jsCode: 'var xmlData = $("Parse XML").first().json;\nvar entries = [];\nif (xmlData.feed && xmlData.feed.entry) {\n  entries = xmlData.feed.entry;\n} else if (xmlData.entry) {\n  entries = xmlData.entry;\n}\nif (!Array.isArray(entries)) entries = [entries];\n\nvar processed = JSON.parse($input.first().json.stdout);\nvar seen = {};\nfor (var i = 0; i < processed.videos.length; i++) {\n  seen[processed.videos[i].id] = true;\n}\n\nvar results = [];\nfor (var j = 0; j < entries.length; j++) {\n  var e = entries[j];\n  var vid = e["yt:videoId"] || e["yt$videoId"] || "";\n  if (vid && !seen[vid]) {\n    results.push({\n      json: {\n        videoId: vid,\n        title: e.title || "",\n        published: (e.published || "").substring(0, 10)\n      }\n    });\n  }\n}\nreturn results;'
    },
    position: [1440, 500]
  },
  output: [{ videoId: 'abc', title: 'Test', published: '2026-09-01' }]
});

const hasNew = ifElse({
  version: 2.3,
  config: {
    name: 'Has New Videos?',
    parameters: {
      conditions: {
        options: { caseSensitive: true, leftValue: '', typeValidation: 'loose', version: 2 },
        combinator: 'and',
        conditions: [{
          leftValue: expr('{{ $json.videoId }}'),
          rightValue: '',
          operator: { type: 'string', operation: 'isNotEmpty' }
        }]
      },
      looseTypeValidation: true
    },
    position: [1740, 500]
  }
});

const videoLoop = splitInBatches({
  version: 3,
  config: {
    name: 'Video Loop',
    parameters: { batchSize: 1 },
    position: [2040, 500]
  }
});

const downloadTranscript = node({
  type: 'n8n-nodes-base.ssh',
  version: 1,
  credentials: { sshPrivateKey: newCredential('Beelink SSH') },
  config: {
    name: 'Download Transcript',
    parameters: {
      resource: 'command',
      operation: 'execute',
      authentication: 'privateKey',
      command: expr('{{ "yt-dlp --write-auto-sub --sub-lang en --write-description --skip-download --output \'/home/wader/Desktop/ai-tools-mcp/temp/%(id)s\' \'https://www.youtube.com/watch?v=" + $json.videoId + "\' 1>&2 && printf \'===TRANSCRIPT===\\n\' && cat \'/home/wader/Desktop/ai-tools-mcp/temp/" + $json.videoId + ".en.vtt\' && printf \'\\n===DESCRIPTION===\\n\' && cat \'/home/wader/Desktop/ai-tools-mcp/temp/" + $json.videoId + ".description\' 2>/dev/null || echo \'(no description available)\'" }}')
    },
    position: [2340, 500],
    onError: 'continueRegularOutput'
  },
  output: [{ stdout: 'transcript', stderr: '', code: 0 }]
});

const checkTranscript = ifElse({
  version: 2.3,
  config: {
    name: 'Transcript OK?',
    parameters: {
      conditions: {
        options: { caseSensitive: true, leftValue: '', typeValidation: 'loose', version: 2 },
        combinator: 'and',
        conditions: [{
          leftValue: expr('{{ $json.stdout }}'),
          rightValue: '',
          operator: { type: 'string', operation: 'isNotEmpty' }
        }]
      },
      looseTypeValidation: true
    },
    position: [2640, 500]
  }
});

const buildBody = node({
  type: 'n8n-nodes-base.code',
  version: 2,
  config: {
    name: 'Build ChatGPT Body',
    parameters: {
      mode: 'runOnceForAllItems',
      language: 'javaScript',
      jsCode: 'var fs = require("fs");\nvar prompt = fs.readFileSync("/home/node/.n8n-files/prompts/ai-tools-extract.md", "utf-8");\n\nvar videoInfo = $("Video Loop").first().json;\nvar videoId = videoInfo.videoId;\nvar videoTitle = videoInfo.title;\nvar published = videoInfo.published;\nvar stdout = $input.first().json.stdout;\n\nvar transcript = stdout;\nvar description = "";\nvar descIdx = stdout.indexOf("===DESCRIPTION===");\nif (descIdx > -1) {\n  transcript = stdout.substring(0, descIdx);\n  description = stdout.substring(descIdx + 17).trim();\n}\nvar transIdx = transcript.indexOf("===TRANSCRIPT===");\nif (transIdx > -1) {\n  transcript = transcript.substring(transIdx + 16);\n}\ntranscript = transcript.trim();\n\nvar userMessage = "Video title: " + videoTitle + "\\nPublished: " + published + "\\nYouTube URL: https://www.youtube.com/watch?v=" + videoId + "\\n\\nDescription:\\n" + description + "\\n\\nTranscript:\\n" + transcript;\n\nvar body = JSON.stringify({\n  model: "gpt-5.5",\n  messages: [\n    { role: "system", content: prompt },\n    { role: "user", content: userMessage }\n  ]\n});\n\nreturn [{\n  json: {\n    requestBody: body,\n    videoId: videoId,\n    videoTitle: videoTitle,\n    published: published,\n    transcript: transcript,\n    description: description\n  }\n}];'
    },
    position: [2940, 500]
  },
  output: [{ requestBody: '{}', videoId: 'abc', videoTitle: 'Test', published: '2026-09-01', transcript: '...' }]
});

const chatgptExtract = node({
  type: 'n8n-nodes-base.httpRequest',
  version: 4.4,
  config: {
    name: 'ChatGPT Extract',
    parameters: {
      method: 'POST',
      url: 'http://172.17.0.1:18080/v1/chat/completions',
      sendHeaders: true,
      specifyHeaders: 'keypair',
      headerParameters: {
        parameters: [
          { name: 'Authorization', value: expr('{{ "Bearer " + $env.CHATGPT_PROXY_KEY }}') },
          { name: 'Content-Type', value: 'application/json' }
        ]
      },
      sendBody: true,
      contentType: 'json',
      specifyBody: 'json',
      jsonBody: expr('{{ $json.requestBody }}'),
      options: { timeout: 120000 }
    },
    position: [3240, 500],
    onError: 'continueRegularOutput',
    retryOnFail: true,
    maxTries: 2,
    waitBetweenTries: 5000
  },
  output: [{ choices: [{ message: { content: '[]' } }] }]
});

const checkChatgpt = ifElse({
  version: 2.3,
  config: {
    name: 'ChatGPT OK?',
    parameters: {
      conditions: {
        options: { caseSensitive: true, leftValue: '', typeValidation: 'loose', version: 2 },
        combinator: 'and',
        conditions: [{
          leftValue: expr('{{ $json.choices }}'),
          rightValue: '',
          operator: { type: 'object', operation: 'exists' }
        }]
      },
      looseTypeValidation: true
    },
    position: [3540, 500]
  }
});

const buildGroqBody = node({
  type: 'n8n-nodes-base.code',
  version: 2,
  config: {
    name: 'Build Groq Body',
    parameters: {
      mode: 'runOnceForAllItems',
      language: 'javaScript',
      jsCode: 'var fs = require("fs");\nvar prompt = fs.readFileSync("/home/node/.n8n-files/prompts/ai-tools-extract.md", "utf-8");\n\nvar bb = $("Build ChatGPT Body").first().json;\nvar videoId = bb.videoId;\nvar videoTitle = bb.videoTitle;\nvar published = bb.published;\nvar transcript = bb.transcript;\nvar description = bb.description || "";\n\nif (transcript.length > 20000) {\n  transcript = transcript.substring(0, 20000);\n}\n\nvar userMessage = "Video title: " + videoTitle + "\\nPublished: " + published + "\\nYouTube URL: https://www.youtube.com/watch?v=" + videoId + "\\n\\nDescription:\\n" + description + "\\n\\nTranscript:\\n" + transcript;\n\nvar body = JSON.stringify({\n  model: "openai/gpt-oss-120b",\n  messages: [\n    { role: "system", content: prompt },\n    { role: "user", content: userMessage }\n  ],\n  max_tokens: 4096\n});\n\nreturn [{\n  json: {\n    requestBody: body,\n    videoId: videoId,\n    videoTitle: videoTitle,\n    published: published,\n    isGroqFallback: true\n  }\n}];'
    },
    position: [3540, 750]
  },
  output: [{ requestBody: '{}', videoId: 'abc', videoTitle: 'Test', published: '2026-09-01', isGroqFallback: true }]
});

const groqFallback = node({
  type: 'n8n-nodes-base.httpRequest',
  version: 4.4,
  config: {
    name: 'Groq Fallback',
    parameters: {
      method: 'POST',
      url: 'https://api.groq.com/openai/v1/chat/completions',
      sendHeaders: true,
      specifyHeaders: 'keypair',
      headerParameters: {
        parameters: [
          { name: 'Authorization', value: expr('{{ "Bearer " + $env.GROQ_API_KEY }}') },
          { name: 'Content-Type', value: 'application/json' }
        ]
      },
      sendBody: true,
      contentType: 'json',
      specifyBody: 'json',
      jsonBody: expr('{{ $json.requestBody }}'),
      options: { timeout: 120000 }
    },
    position: [3840, 750],
    retryOnFail: true,
    maxTries: 2,
    waitBetweenTries: 5000
  },
  output: [{ choices: [{ message: { content: '[]' } }] }]
});

const tagGroq = node({
  type: 'n8n-nodes-base.code',
  version: 2,
  config: {
    name: 'Tag Groq',
    parameters: {
      mode: 'runOnceForAllItems',
      language: 'javaScript',
      jsCode: 'var data = $input.first().json;\ndata.isGroqFallback = true;\nreturn [{ json: data }];'
    },
    position: [4040, 750]
  },
  output: [{ choices: [{ message: { content: '[]' } }], isGroqFallback: true }]
});

const parseResponse = node({
  type: 'n8n-nodes-base.code',
  version: 2,
  config: {
    name: 'Parse Response',
    parameters: {
      mode: 'runOnceForAllItems',
      language: 'javaScript',
      jsCode: 'var response = $input.first().json;\nvar responseText = "";\n\ntry {\n  if (response.choices && response.choices[0]) {\n    responseText = response.choices[0].message.content;\n  }\n} catch (e) {\n  return [{ json: { error: true, errorMessage: "Could not extract response: " + e.message } }];\n}\n\nif (!responseText) {\n  return [{ json: { error: true, errorMessage: "Empty response from model" } }];\n}\n\nvar tools;\ntry {\n  var cleaned = responseText.trim();\n  var fence = String.fromCharCode(96);\n  var tripleFence = fence + fence + fence;\n  if (cleaned.indexOf(tripleFence) === 0) {\n    cleaned = cleaned.substring(3);\n    if (cleaned.indexOf("json") === 0) cleaned = cleaned.substring(4);\n    cleaned = cleaned.trim();\n    var lastFence = cleaned.lastIndexOf(tripleFence);\n    if (lastFence > -1) cleaned = cleaned.substring(0, lastFence).trim();\n  }\n  tools = JSON.parse(cleaned);\n} catch (e) {\n  return [{ json: { error: true, errorMessage: "JSON parse failed: " + e.message, raw: responseText.substring(0, 500) } }];\n}\n\nif (!Array.isArray(tools)) tools = [tools];\n\nvar videoId, videoTitle, published;\ntry {\n  var bb = $("Build ChatGPT Body").first().json;\n  videoId = bb.videoId;\n  videoTitle = bb.videoTitle;\n  published = bb.published;\n} catch (e) {\n  return [{ json: { error: true, errorMessage: "Could not get video info" } }];\n}\n\nvar isGroqFallback = response.isGroqFallback === true;\n\nvar today = new Date().toISOString().substring(0, 10);\nvar cards = [];\n\nfor (var i = 0; i < tools.length; i++) {\n  var tool = tools[i];\n  var name = tool.name || "Unknown";\n  var filename = name.toLowerCase().replace(/\\s+/g, "-").replace(/[^a-z0-9-]/g, "").replace(/-+/g, "-") + ".md";\n  var platform = Array.isArray(tool.platform) ? tool.platform.join(", ") : (tool.platform || "unknown");\n  var sourceDepth = tool.source_depth || "mention";\n\n  var content = "# " + name + "\\n\\n"\n    + (tool.description || "") + "\\n\\n"\n    + "- **URL:** " + (tool.url || "not mentioned") + "\\n"\n    + "- **Pricing:** " + (tool.pricing || "unknown") + "\\n"\n    + "- **Platform:** " + platform + "\\n"\n    + "- **Local-friendly:** " + (tool.local_friendly || "unknown") + "\\n"\n    + "- **Availability:** " + (tool.availability || "available") + "\\n"\n    + "- **Last reviewed:** " + published + "\\n\\n"\n    + "## What it does\\n" + (tool.what_it_does || "") + "\\n\\n"\n    + "## When to use it\\n" + (tool.when_to_use_it || "") + "\\n\\n"\n    + "## Sources\\n"\n    + "- [" + videoTitle + "](https://www.youtube.com/watch?v=" + videoId + ") (" + published + ") - " + sourceDepth + "\\n";\n\n  var sourceLine = "- [" + videoTitle + "](https://www.youtube.com/watch?v=" + videoId + ") (" + published + ") - " + sourceDepth;\n\n  cards.push({ filename: filename, content: content, sourceLine: sourceLine });\n}\n\nvar payload = {\n  videoId: videoId,\n  videoTitle: videoTitle,\n  published: published,\n  processed: today,\n  toolCount: cards.length,\n  skipCommit: cards.length === 0,\n  isGroqFallback: isGroqFallback,\n  cards: cards\n};\n\nvar encoded = Buffer.from(JSON.stringify(payload)).toString("base64");\n\nreturn [{\n  json: {\n    cardDataBase64: encoded,\n    videoId: videoId,\n    videoTitle: videoTitle,\n    toolCount: cards.length,\n    skipCommit: cards.length === 0\n  }\n}];'
    },
    position: [4140, 500]
  },
  output: [{ cardDataBase64: 'base64data', videoId: 'abc', videoTitle: 'Test', toolCount: 5, skipCommit: false }]
});

const checkParse = ifElse({
  version: 2.3,
  config: {
    name: 'Parse OK?',
    parameters: {
      conditions: {
        options: { caseSensitive: true, leftValue: '', typeValidation: 'loose', version: 2 },
        combinator: 'and',
        conditions: [{
          leftValue: expr('{{ $json.error }}'),
          rightValue: '',
          operator: { type: 'object', operation: 'notExists' }
        }]
      },
      looseTypeValidation: true
    },
    position: [4440, 500]
  }
});

const writeCards = node({
  type: 'n8n-nodes-base.ssh',
  version: 1,
  credentials: { sshPrivateKey: newCredential('Beelink SSH') },
  config: {
    name: 'Write Cards',
    parameters: {
      resource: 'command',
      operation: 'execute',
      authentication: 'privateKey',
      command: expr('{{ "echo \'" + $json.cardDataBase64 + "\' | base64 -d | python3 /home/wader/Desktop/ai-tools-mcp/scripts/write-cards.py" }}')
    },
    position: [4740, 500]
  },
  output: [{ stdout: '{"ok":true}', stderr: '', code: 0 }]
});

const rateWait = node({
  type: 'n8n-nodes-base.wait',
  version: 1.1,
  config: {
    name: 'Rate Limit Wait',
    parameters: {
      resume: 'timeInterval',
      amount: 2,
      unit: 'seconds'
    },
    position: [5040, 500]
  },
  output: [{}]
});

const buildSummary = node({
  type: 'n8n-nodes-base.code',
  version: 2,
  config: {
    name: 'Build Summary',
    parameters: {
      mode: 'runOnceForAllItems',
      language: 'javaScript',
      jsCode: 'var items = $input.all();\nif (items.length === 0) return [];\n\nvar videoList = [];\nfor (var i = 0; i < items.length; i++) {\n  videoList.push("- " + items[i].json.title);\n}\n\nvar content = "<@445306594163425301> AI Tools Monitor: " + items.length + " video(s) processed from ingest queue\\n" + videoList.join("\\n");\n\nreturn [{\n  json: {\n    messageContent: content\n  }\n}];'
    },
    position: [2340, 200]
  },
  output: [{ messageContent: 'AI Tools Monitor: ...' }]
});

const addCasey = node({
  type: 'n8n-nodes-base.httpRequest',
  version: 4.4,
  config: {
    name: 'Add Casey to Thread',
    parameters: {
      method: 'PUT',
      url: 'https://discord.com/api/v10/channels/1539435871491850290/thread-members/445306594163425301',
      sendHeaders: true,
      specifyHeaders: 'keypair',
      headerParameters: {
        parameters: [
          { name: 'Authorization', value: expr('{{ "Bot " + $env.DISCORD_CLAUDE_BOT_TOKEN }}') }
        ]
      },
      options: {
        response: { response: { neverError: true } }
      }
    },
    position: [2640, 200],
    retryOnFail: true,
    maxTries: 3,
    waitBetweenTries: 5000
  },
  output: [{}]
});

const sendNotification = node({
  type: 'n8n-nodes-base.httpRequest',
  version: 4.4,
  config: {
    name: 'Send Notification',
    parameters: {
      method: 'POST',
      url: 'https://discord.com/api/v10/channels/1539435871491850290/messages',
      sendHeaders: true,
      specifyHeaders: 'keypair',
      headerParameters: {
        parameters: [
          { name: 'Authorization', value: expr('{{ "Bot " + $env.DISCORD_CLAUDE_BOT_TOKEN }}') },
          { name: 'Content-Type', value: 'application/json' }
        ]
      },
      sendBody: true,
      contentType: 'json',
      specifyBody: 'keypair',
      bodyParameters: {
        parameters: [
          { name: 'content', value: expr('{{ $("Build Summary").first().json.messageContent }}') }
        ]
      }
    },
    position: [2940, 200],
    retryOnFail: true,
    maxTries: 3,
    waitBetweenTries: 5000
  },
  output: [{}]
});

const info = sticky({
  config: {
    name: 'Workflow Info',
    parameters: {
      content: 'AI Tools Ingest Pipeline v2\n\nDaily 6AM PST: polls The AI Search YouTube RSS.\nExtracts tool cards via ChatGPT proxy (Groq fallback).\nUses video descriptions as primary extraction signal.\nCommits to github.com/Minecraft9101010/ai-tools-mcp.\n\nError workflow: Automation Error Alert v2 (iYX7bh5KysKTIALp)\nDiscord: #alert thread 1539435871491850290'
    },
    position: [240, 100],
    width: 450,
    height: 200
  }
});

export default workflow('ai-tools-ingest', 'AI Tools Ingest Pipeline v2')
  .add(scheduleTrigger).to(fetchRss)
  .add(manualTrigger).to(fetchRss)
  .add(fetchRss)
    .to(parseXml)
    .to(pullRepo)
    .to(filterNew)
    .to(hasNew
      .onTrue(videoLoop
        .onDone(buildSummary.to(addCasey.to(sendNotification)))
        .onEachBatch(
          downloadTranscript.to(checkTranscript
            .onTrue(buildBody.to(chatgptExtract.to(checkChatgpt
              .onTrue(parseResponse)
              .onFalse(buildGroqBody.to(groqFallback.to(tagGroq.to(parseResponse))))
            )))
            .onFalse(nextBatch(videoLoop))
          )
        )
      )
    )
  .add(parseResponse)
    .to(checkParse
      .onTrue(writeCards.to(rateWait.to(nextBatch(videoLoop))))
      .onFalse(nextBatch(videoLoop))
    )
  .add(info);
