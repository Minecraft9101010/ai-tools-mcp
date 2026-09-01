# VocalRender

Open-source singing-voice generator: lyrics plus MIDI melody in, realistic expressive singing out.

- **URL:** not mentioned (repository with install and training instructions)
- **Pricing:** open-source
- **Platform:** local
- **Local-friendly:** yes — both variants under 10 GB
- **Availability:** available
- **Last reviewed:** 2026-08-09

## What it does
Takes lyrics and a MIDI melody and predicts the full vocal performance — timing, pitch, tone, articulation — deciding audio length itself (handles syllables stretched across notes). An autoregressive stage sketches style and timing, then a diffusion stage fills in fine audio detail. Two variants (VocalRender and the better-sounding Pro). Currently trained on Chinese only, but training code is released so you can train a checkpoint in any language.

## When to use it
Adding sung vocals to a composed melody with more realism and pitch fidelity than Vevo 2 or Soul X. Not a full song generator — pair it with a music model or DAW workflow. Budget for training your own checkpoint if you need English.

## Sources
- [New 3D editors, open medical AI, AI symphony, Qwen 3.8, Wan Animate 2: AI NEWS](https://www.youtube.com/watch?v=uJgzFn0GT7M) (2026-08-09) - deep-dive
