# MiniMax M3

MiniMax's open-weights frontier model: leading open-source performance at less than half the size of Kimi or DeepSeek, thanks to MiniMax sparse attention.

- **URL:** not mentioned (Hugging Face)
- **Pricing:** open-source
- **Platform:** local | API
- **Local-friendly:** no (427B parameters, 850GB full / 444GB FP8 version)
- **Availability:** available
- **Last reviewed:** 2026-06-14

## What it does
427B-parameter MoE (23B active) with a 1M-token context window, ranked the leading open-source model on Artificial Analysis ahead of Kimi, Mimo, and DeepSeek V4. Its published MiniMax sparse attention mechanism adds a lightweight indexing branch that picks the most useful context blocks before the expensive attention step, like a smart table of contents, making huge contexts faster and cheaper. Code and technical report released.

## When to use it
Top open-source pick when you need frontier-level performance with a smaller footprint than trillion-parameter rivals, or very long contexts handled efficiently. The technical report is also a rare public reference for sparse attention architecture.

## Sources
- [RIP Claude Fable, open-source AI unleashed, full body avatars, new Google models, new TTS: AI NEWS](https://www.youtube.com/watch?v=SxiRANj0xLs) (2026-06-14) - deep-dive
- [New #1 open-source AI model is here! GLM 5.2](https://www.youtube.com/watch?v=6d__WOpZswY) (2026-06-17) - mention
