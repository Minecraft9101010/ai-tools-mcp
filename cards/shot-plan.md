# Shot Plan

Multi-shot video generation with frame-exact control over cuts, crossfades, and camera moves.

- **URL:** not mentioned (GitHub, linked in video description)
- **Pricing:** open-source (inference and training code released)
- **Platform:** local
- **Local-friendly:** no for the Wan 2.2 variant (28.6 GB, high-end GPU); Wan 2.1 variant is smaller
- **Availability:** available
- **Last reviewed:** 2026-07-26

## What it does
Takes a high-level prompt plus per-shot descriptions, and you specify the exact frame where each cut, crossfade, or camera movement (zoom, pullback, truck, circle) occurs. Outputs a consistent multi-shot video that follows the shot list, similar to Kling 3's multi-shot feature but open source. Benchmarks show better consistency and narrative than competing multi-shot models.

## When to use it
Story-driven clips where you need editorial control (timed cuts, transitions, specific camera moves) instead of hoping a single-prompt generator lands the pacing. The open training code also makes it a base for fine-tuning.

## Sources
- [Claude Opus 5, GPT 6 hack, Flux 3, new Gemini, quantum breakthrough, new Qwen: AI NEWS](https://www.youtube.com/watch?v=fMaPaK4gcNE) (2026-07-26) - deep-dive
