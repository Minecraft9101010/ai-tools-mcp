# UniGenDet

Unified model that simultaneously generates more realistic images and detects AI-generated/fake images — each task improves the other via symbiotic self-attention.

- **URL:** not mentioned (GitHub released)
- **Pricing:** open-source
- **Platform:** local
- **Local-friendly:** yes (GitHub released with instructions)
- **Availability:** available
- **Last reviewed:** 2026-04-26

## What it does
UniGenDet uses a single model architecture with symbiotic self-attention — generation and fake detection reinforce each other in a loop. Because it's trained to spot exactly what makes an AI image look fake, its generations avoid those patterns, producing more realistic results than Bagel and other competitors. Also functions as a standalone AI image detector. Outperforms competitors on fake image detection benchmarks.

## When to use it
Content moderation pipelines that need to distinguish AI-generated from real images. Generating more photorealistic images when standard generators produce tell-tale artifacts. Research into detection/generation dynamics.

## Sources
- [The most insane week in AI](https://www.youtube.com/watch?v=ZKfd9S9lOtc) (2026-04-26) - mention
