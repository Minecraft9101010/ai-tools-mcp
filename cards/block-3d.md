# Block 3D

Text-to-3D generator that builds objects block by block, averaging about 5 seconds per model — among the fastest available.

- **URL:** not mentioned (code and training code released)
- **Pricing:** open-source
- **Platform:** local
- **Local-friendly:** unknown (VRAM requirements not mentioned)
- **Availability:** available
- **Last reviewed:** 2026-08-30

## What it does
Breaks a 3D object into blocks of shape tokens, generating blocks sequentially but all tokens within each block in parallel via diffusion — over five times faster than standard auto-regressive 3D generation. Training code is released alongside inference.

## When to use it
When 3D generation speed matters more than maximum detail: rapid prototyping, bulk asset generation, or iterating on ideas before a slower high-quality pass. Not the most detailed output.

## Sources
- [Ox Alpha reveal, realtime Minimax, Qwen Next, Hy4, robot olympics: AI NEWS](https://www.youtube.com/watch?v=4wjHNgMLeyY) (2026-08-30) - deep-dive
