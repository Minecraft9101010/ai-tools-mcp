# Scope (Tencent, camera control)

Framework that gives AI video models precise, path-specified camera movement — pullback, dolly, crane, orbit — from a single input image, built on Wan 2.2.

- **URL:** not mentioned (GitHub)
- **Pricing:** open-source (Apache 2.0)
- **Platform:** local
- **Local-friendly:** unknown (size not stated; built on the Wan 2.2 base)
- **Availability:** available
- **Last reviewed:** 2026-08-16

## What it does
Takes a starting image plus a specified camera path (pullback-and-rise, push-sweep, S-curve reveal, crane-up, dolly-in) and generates video that follows that exact camera movement consistently. Built on Wan 2.2 (auto-captions rendered this as "1.2.2") and what's very likely DiffSynth Studio (auto-captions rendered this as "Diff Singer Studio," confidence 60).

## When to use it
When a project needs a specific, reproducible camera move rather than hoping a text prompt like "camera pans" lands correctly.

Note: a different, unrelated tool is also named "Scope" in this library (an open-source FPS game world model) — this card is Tencent's camera-control framework.

## Sources
- [New Deepseek, GLM 5.3, Grok 4.6, LTX 2.5, Qwen 3.8, Gemini 3.7: AI NEWS](https://www.youtube.com/watch?v=62HSUsS0ypo) (2026-08-16) - deep-dive
