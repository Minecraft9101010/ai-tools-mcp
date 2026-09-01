# Scope

Open-source generative world model that produces a playable first-person shooter game world responding to real controller actions.

- **URL:** not mentioned (GitHub)
- **Pricing:** open-source
- **Platform:** local
- **Local-friendly:** no (~30GB, needs a high-end GPU)
- **Availability:** available
- **Last reviewed:** 2026-05-31

## What it does
Takes a starting frame plus controller input (move, aim, fire, reload, switch weapons, interact) and generates a real-time-responsive video game world. Trained on almost 70,000 clips across seven FPS games with 10 controller signal types, so it learns action patterns that generalize across titles rather than memorizing one game. Outperforms recent game-generation models like Matrix Game 3 and Hunyuan World 5 on visual quality, motion quality, and consistency, though gun/scene details still warp over time. Built on Wan 2.2. Training dataset is also released.

## When to use it
Researching or prototyping generative, action-responsive game worlds. Not yet visually polished enough for production use, but one of the first models handling this many distinct FPS actions.

## Sources
- [Self-improving AI, Opus 4.8, Nvidia bangers, game-ready 3D models, juggling robots: AI NEWS](https://www.youtube.com/watch?v=RdqYvdT74i0) (2026-05-31) - deep-dive
