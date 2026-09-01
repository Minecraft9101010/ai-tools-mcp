# FastVideo for MiniMax (Hao AI Lab)

Distilled MiniMax H3 that generates video up to 14x faster — faster than real time on 8x B200s — released free by the Hao AI Lab.

- **URL:** not mentioned (GitHub + HuggingFace; Apple Silicon guide included)
- **Pricing:** open-source
- **Platform:** local
- **Local-friendly:** partial — the transformer is 70GB, but Kijai's ComfyUI checkpoint is 22.9GB (ComfyUI merge pending at review time); consumer-GPU variants in progress
- **Availability:** available
- **Last reviewed:** 2026-08-30

## What it does
Combines DMD2 distillation (a faster generation process imitating the base model in far fewer steps) with video sparse attention that keeps only ~10% of attention data. Entirely data-free: the base MiniMax model acted as teacher, so no original or new training data was needed. On 8 B200 GPUs it generates a 15-second clip in under 30 seconds.

## When to use it
When MiniMax H3 quality is right but generation time is the bottleneck — the main complaint with the base model. Watch for the consumer-GPU variants and the Kijai ComfyUI checkpoint if you don't have datacenter hardware.

## Sources
- [Ox Alpha reveal, realtime Minimax, Qwen Next, Hy4, robot olympics: AI NEWS](https://www.youtube.com/watch?v=4wjHNgMLeyY) (2026-08-30) - deep-dive
