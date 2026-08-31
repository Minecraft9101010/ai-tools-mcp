# CDM (Continuous Time Distribution Matching)

Alibaba's image generation acceleration method that reduces diffusion steps from 20-50 down to 4 while maintaining quality, currently the best acceleration method available.

- **URL:** not mentioned (GitHub released; supports Stable Diffusion 3 and LongCat)
- **Pricing:** open-source
- **Platform:** local
- **Local-friendly:** yes (runs on consumer GPUs; generates images in seconds)
- **Availability:** available
- **Last reviewed:** 2026-05-10

## What it does
CDM is an acceleration technique you apply on top of existing diffusion models (currently SD3 and LongCat Image). It matches the output distribution of a 4-step process to the full multi-step original, achieving near-identical quality at 5x fewer steps. Outperforms the previous leading acceleration method DMD2 in detail and definition. With a decent GPU, generates images in a few seconds at near-real-time speeds.

## When to use it
Speeding up any SD3 or LongCat generation pipeline where latency matters. Useful in production workflows where batch image generation costs are significant. Add it on top of existing workflows — no model replacement required.

## Sources
- [Self-evolving AI, robot fights, new GPT voice, new local image model, Gemma upgrade: AI NEWS](https://www.youtube.com/watch?v=quxnhOeRz7I) (2026-05-10) - mention
