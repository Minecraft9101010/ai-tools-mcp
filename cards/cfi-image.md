# CFI Image

Tiny open-source image generator (1B-5B) that splits layout and texture into separate streams, beating larger open models on benchmarks.

- **URL:** not mentioned (code released)
- **Pricing:** open-source
- **Platform:** local
- **Local-friendly:** yes (largest 5B model under 10GB, fits most consumer GPUs)
- **Availability:** available
- **Last reviewed:** 2026-07-12

## What it does
Three variants from 1B (fastest) to 5B (best quality). Uses a two-stream design, one stream for high-level layout, one for texture and visual detail, instead of entangling both in standard denoising. Strong photorealism, text handling, dense multi-element layouts (ads, posters, infographics), anime, and other styles. Benchmarks above larger open models (Qwen Image, Flux Klein, Z Image), though quality trails leaders like Krea 2 and Ideogram.

## When to use it
Fast, efficient local image generation on modest hardware, especially text-heavy or element-dense compositions. Pick a leading open model instead when peak quality beats speed.

## Sources
- [Girlfriend simulators, GPT 5.6, Grok 4.5, Seedream 5.0, Muse Spark, robot surgery: AI NEWS](https://www.youtube.com/watch?v=Ti1V7OI2Rro) (2026-07-12) - deep-dive
