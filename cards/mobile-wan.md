# Mobile Wan

Runs Alibaba's Wan video generator directly on a mobile phone: 5-second 480p clips in about 20 seconds.

- **URL:** not mentioned (GitHub + HuggingFace, linked in video description)
- **Pricing:** open-source
- **Platform:** mobile
- **Local-friendly:** yes (total download is 9.9 GB, runs on-device)
- **Availability:** available
- **Last reviewed:** 2026-07-19

## What it does
A heavily optimized version of the Wan 2.2 5B text-to-video model compressed to run on phones. Generates video in small chunks, prunes less useful attention heads, cuts diffusion to three steps (vs the usual 20-30), and uses a memory-efficient decoder. Output is 5-second clips at 480p, 16fps.

## When to use it
On-device video generation with no CUDA GPU and no cloud: demos, quick drafts, or private generation on a phone. Not for quality-critical work; the full Wan models are better when you have a real GPU.

## Sources
- [Kimi K3, dancing waifus, robot UFC, song to MIDI, GPT Red, hoverboards: AI NEWS](https://www.youtube.com/watch?v=uQ2Hqg5MZ-8) (2026-07-19) - deep-dive
