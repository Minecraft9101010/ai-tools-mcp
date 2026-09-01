# Laguna S 2.1 (Poolside)

Open-weights agentic coding model built to grind on hard problems: verifies its work, backtracks, and keeps going.

- **URL:** not mentioned (HuggingFace, linked in video description)
- **Pricing:** open-source
- **Platform:** local
- **Local-friendly:** no for the full model (235 GB, ~71 GB NVFP4); the 33B XS variant can fit a decent consumer GPU
- **Availability:** available
- **Last reviewed:** 2026-07-26

## What it does
A 118B mixture-of-experts coding model (8B active, 1M token context, thinking and non-thinking modes) trained for long-horizon agentic work: verify, backtrack, fix, repeat. Self-reported SWE score of 40% edges out GLM 5.2 despite being roughly a seventh the size, making it one of the strongest ~100B open models. The 33B XS variant tested noticeably worse than Qwen 3.6 27B/35B at similar size.

## When to use it
Self-hosting a strong coding agent in the ~100B class where GLM 5.2-scale models don't fit. Skip the XS variant; Qwen 3.6 remains the better medium-size local model.

## Sources
- [Claude Opus 5, GPT 6 hack, Flux 3, new Gemini, quantum breakthrough, new Qwen: AI NEWS](https://www.youtube.com/watch?v=fMaPaK4gcNE) (2026-07-26) - deep-dive
