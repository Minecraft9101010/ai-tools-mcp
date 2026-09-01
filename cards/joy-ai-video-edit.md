# Joy AI Video Edit

Open-source video editor that applies natural-language edits to existing footage in near real time (roughly 1 second latency) — outfit swaps, character removal with background fill, object recoloring.

- **URL:** not mentioned (HuggingFace)
- **Pricing:** open-source (Apache 2.0)
- **Platform:** local
- **Local-friendly:** no (32.5GB, needs a high-end GPU)
- **Availability:** available
- **Last reviewed:** 2026-08-16

## What it does
Edits existing video with a text prompt — restyle outfits/setting, remove a character with seamless background fill, recolor objects — at roughly 1-second latency, fast enough for a live editing interface demo. A 16B-parameter autoregressive diffusion transformer generating 720p at 30fps+, chunk by chunk. Benchmarks as good as Bernini R or closed-source Kling 3 Omni on edit quality, but noticeably faster. Apache 2.0, commercial use allowed.

## When to use it
Fast reference/prompt-driven video editing (wardrobe, background, object changes) when speed matters and you have a high-end local GPU — a faster, if slightly less capable, open alternative to Bernini.

## Sources
- [New Deepseek, GLM 5.3, Grok 4.6, LTX 2.5, Qwen 3.8, Gemini 3.7: AI NEWS](https://www.youtube.com/watch?v=62HSUsS0ypo) (2026-08-16) - deep-dive
