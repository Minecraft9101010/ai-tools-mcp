# Perception DILM (ByteDance)

Vision-language model that captions many regions of an image simultaneously using a diffusion language model, instead of describing regions one at a time.

- **URL:** not mentioned (GitHub)
- **Pricing:** open-source
- **Platform:** local
- **Local-friendly:** unknown (size not stated)
- **Availability:** available
- **Last reviewed:** 2026-06-28

## What it does
Given an image plus several region masks, outputs descriptions for all regions at once via a diffusion language model rather than the usual one-region-at-a-time captioning loop — outperforming similarly sized vision models on accuracy while being notably faster as the number of regions grows. Model, datasets, and training/eval code all released.

## When to use it
Dense multi-region image captioning/annotation pipelines where per-region captioning latency scales badly with a normal autoregressive vision-language model.

## Sources
- [GPT 5.6, Mythos ban lifted, realtime avatars, Seedance 2.5, brain ultrasound: AI NEWS](https://www.youtube.com/watch?v=7c_ieWfAbrw) (2026-06-28) - deep-dive
