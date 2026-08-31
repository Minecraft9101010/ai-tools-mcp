# Zia 1 8B

First open-source reasoning model trained entirely on AMD GPUs, punching far above its 8B parameter weight class.

- **URL:** not mentioned (from Zyra; Apache 2.0 license; ~17.7 GB total)
- **Pricing:** open-source
- **Platform:** local | API
- **Local-friendly:** yes (17.7 GB; fits on mid/high-end consumer hardware)
- **Availability:** available
- **Last reviewed:** 2026-05-10

## What it does
Zia 1 is an 8B parameter mixture-of-experts model trained on AMD Instinct hardware (not Nvidia). Uses compressed convolutional attention for efficiency, a stability-focused router, and learned residual scaling. Its key innovation is Marovian RSA: instead of reasoning once, it generates multiple reasoning attempts, samples the best pieces, and uses them to improve the next round — like passing only the best notes forward. Benchmarks near Qwen 3 (235B) and DeepSeek V3.2 (80B), models 40-100x larger.

## When to use it
Running a capable reasoning model on consumer hardware without needing Nvidia GPUs. When you need an Apache 2.0 licensed model for commercial use. Tasks involving math, coding, and multi-step reasoning where a small footprint matters.

## Sources
- [Self-evolving AI, robot fights, new GPT voice, new local image model, Gemma upgrade: AI NEWS](https://www.youtube.com/watch?v=quxnhOeRz7I) (2026-05-10) - mention
