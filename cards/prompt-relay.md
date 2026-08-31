# Prompt Relay

Training-free plug-and-play method for generating multi-scene videos with seamless transitions, built on top of Alibaba's Wan video model.

- **URL:** not mentioned (paper/GitHub pending full release as of April 2025)
- **Pricing:** open-source
- **Platform:** local
- **Local-friendly:** yes (add-on to Wan/LTX)
- **Availability:** limited (implementation instructions released; model files not yet released at time of video)
- **Last reviewed:** 2026-06-01

## What it does
Routes multiple sequential text prompts at the cross-attention layers of a video diffusion model, tying each prompt to specific start/end times. Lets you specify scene changes (e.g., eagle flying → car in cyberpunk city → zoom out from a TV) and generates a coherent, smooth video across all transitions without prompts bleeding into adjacent segments.

## When to use it
When you need a single video with multiple distinct scenes or narrative beats and don't want jarring cuts. Drop it on top of Wan or LTX locally.

## Sources
- [Claude Opus 4.7, Qwen 3.6, Happy Oyster, realtime 3D worlds, new Google TTS: AI NEWS](https://youtube.com/watch?v=G8fqduzB5lc) (2026-04-19) - mention
