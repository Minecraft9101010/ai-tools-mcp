# Diffusion Gemma

Google's open-source diffusion language model: drafts blocks of text in parallel and refines them, up to 4x faster than autoregressive generation.

- **URL:** not mentioned (Hugging Face)
- **Pricing:** open-source (Apache 2)
- **Platform:** local
- **Local-friendly:** no (26B parameters, ~52GB; needs a high-end GPU)
- **Availability:** available
- **Last reviewed:** 2026-06-14

## What it does
Generates text like an image diffusion model instead of left-to-right token prediction, refining whole blocks over multiple passes for up to 4x faster generation. Unusually for diffusion LMs, it benchmarks close to same-size autoregressive Gemma 4 on MMLU, GPQA, competitive math, and coding. Handles structured tasks like Sudoku and 3D model generation.

## When to use it
When generation speed matters more than squeezing out the last few benchmark points, or for experimenting with parallel/block text generation. Apache 2 allows commercial use.

## Sources
- [RIP Claude Fable, open-source AI unleashed, full body avatars, new Google models, new TTS: AI NEWS](https://www.youtube.com/watch?v=SxiRANj0xLs) (2026-06-14) - deep-dive
