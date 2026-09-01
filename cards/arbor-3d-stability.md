# Arbor (Stability AI)

Stability AI 3D generation tool that lets you specify exactly where geometry should and shouldn't exist via simple constraint meshes, rather than hoping a text prompt lands.

- **URL:** not mentioned (Blender add-on, ComfyUI)
- **Pricing:** open-source
- **Platform:** local (ComfyUI, Blender add-on)
- **Local-friendly:** yes (Arbor model itself ~600MB; also needs Trellis/Trellis 2 for 3D generation)
- **Availability:** available
- **Last reviewed:** 2026-06-28

## What it does
Lets you feed a 3D generation model simple constraint meshes (not finished 3D models) specifying where geometry should exist, shouldn't exist, or where parts should make contact — e.g. a chair that must fit inside a given volume with its legs touching the floor. Feeds those constraints into an existing 3D generator (Trellis/Trellis 2) without retraining it. Consistently generates assets that obey the requested geometry better than prior approaches.

## When to use it
3D asset generation where explicit spatial/physical constraints must be respected (furniture fitting a space, objects touching specific points) rather than hoping a text prompt produces the right geometry. Note: an unrelated tool is also named "Arbor" (an AI research-agent framework covered elsewhere in this library) — this card is specifically Stability AI's 3D constraint tool.

## Sources
- [GPT 5.6, Mythos ban lifted, realtime avatars, Seedance 2.5, brain ultrasound: AI NEWS](https://www.youtube.com/watch?v=7c_ieWfAbrw) (2026-06-28) - deep-dive
