# Cactus Needle 2

45-million-parameter model packaged into a 14MB binary that runs on essentially anything — Raspberry Pi, VR headsets, sub-$200 phones — with no GPU or VRAM required.

- **URL:** not mentioned
- **Pricing:** open-source
- **Platform:** local
- **Local-friendly:** yes (14MB binary, ~28MB RAM to run)
- **Availability:** available
- **Last reviewed:** 2026-08-16

## What it does
An extremely small (45M parameter) model for tool-calling, device control, and document extraction on devices too weak for normal LLMs. Decodes at 500 tokens/sec on a Raspberry Pi 5, up to 1,500 tokens/sec on VR devices, and 700 tokens/sec on sub-$200 phones. Not intended for long-horizon reasoning or agentic tasks — it trades intelligence for extreme portability.

## When to use it
Embedding basic tool-calling or extraction capability into severely resource-constrained devices where even a small billion-parameter LLM won't fit.

## Sources
- [New Deepseek, GLM 5.3, Grok 4.6, LTX 2.5, Qwen 3.8, Gemini 3.7: AI NEWS](https://www.youtube.com/watch?v=62HSUsS0ypo) (2026-08-16) - deep-dive
