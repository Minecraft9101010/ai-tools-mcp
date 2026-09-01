# Code World Model

AI world generator that keeps a persistent, rule-consistent world: a coding agent maintains the world state in code while a video model renders the graphics.

- **URL:** not mentioned (GitHub repo)
- **Pricing:** open-source
- **Platform:** local
- **Local-friendly:** no (uses a fine-tuned MiniMax H3; tested on an 80GB H800, though quantized versions may fit lower VRAM)
- **Availability:** available
- **Last reviewed:** 2026-08-30

## What it does
Splits world generation into two jobs: a coding agent reasons about events, writes code, and updates a persistent world state (objects, layout, rules, consequences); that state becomes a simplified proxy which a fine-tuned MiniMax H3 renders into video. Demos show long-running worlds that can change visual styles while preserving the scene, objects (tracked on a live map), and events.

## When to use it
Prototyping AI-powered video games or interactive worlds where consistency matters — plain video world models forget rules and objects; this architecture keeps them coherent across long sessions.

## Sources
- [Ox Alpha reveal, realtime Minimax, Qwen Next, Hy4, robot olympics: AI NEWS](https://www.youtube.com/watch?v=4wjHNgMLeyY) (2026-08-30) - deep-dive
