# RDM (Representation Distribution Matching)

One-step image generator: produces a full image in a single diffusion step, with quality above other one-step models.

- **URL:** not mentioned (code released, linked in video description)
- **Pricing:** open-source
- **Platform:** local
- **Local-friendly:** unknown (requirements not stated)
- **Availability:** available
- **Last reviewed:** 2026-07-05

## What it does
Trains the model to match the distribution of high-level visual features rather than denoising over 30-50 steps (or 4-10 for turbo models), so it generates in one step. Output is lighter on fine detail with minor errors, but better than competing one-step approaches.

## When to use it
Extreme-speed image generation where latency beats fidelity: realtime previews, high-volume drafts. Use a normal multi-step model when detail matters.

## Sources
- [Full body waifus, Claude Fable is back, LongCat 2.0, mind-reading AI, live video editing: AI NEWS](https://www.youtube.com/watch?v=qtzzN8w2TvU) (2026-07-05) - deep-dive
