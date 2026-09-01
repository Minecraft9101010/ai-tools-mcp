# Wan Animate 2 (Alibaba)

Character animation model: photo of any character plus a reference video, and it transfers the motion — hands, fingers, and facial expressions included.

- **URL:** not mentioned (HuggingFace / GitHub)
- **Pricing:** open-source
- **Platform:** local (ComfyUI supported)
- **Local-friendly:** partially — full model is ~33 GB (high-end GPU); INT8 version is half that and fits a mid-tier GPU
- **Availability:** available
- **Last reviewed:** 2026-08-09

## What it does
Animates a still character from a driving video, including finger-level hand motion and facial expression transfer. Handles non-human characters and irregular body proportions, multiple characters at once (two-person video to two-character photo, or one performer driving several characters), and lets you change the camera angle of the output. A smaller Wan Animate 2 Light variant streams in real time (sub-second latency) on the right hardware.

## When to use it
Motion-transfer animation of any character from performance footage — a step up in detail and naturalness from Wan Animate 1 and DreamActor, and roughly on par with Scale 2. The Light variant is the pick for live/streaming avatar use.

## Sources
- [New 3D editors, open medical AI, AI symphony, Qwen 3.8, Wan Animate 2: AI NEWS](https://www.youtube.com/watch?v=uJgzFn0GT7M) (2026-08-09) - deep-dive
