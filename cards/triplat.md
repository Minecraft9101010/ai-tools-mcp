# TriPlat

Open-source 3D reconstruction model that turns a set of images into a simulation-ready 3D scene made of triangle primitives instead of Gaussian splats.

- **URL:** not mentioned (GitHub)
- **Pricing:** open-source
- **Platform:** local
- **Local-friendly:** yes (4.4GB per model)
- **Availability:** available
- **Last reviewed:** 2026-05-31

## What it does
Most 3D reconstruction models output Gaussian splats, which need an extra mesh-conversion step before they're usable for physics, collisions, or game-engine interaction. TriPlat represents the entire scene as triangle primitives from the start, skipping that conversion step and reconstructing scenes significantly faster than splat-based methods. Output is usable directly for robotics simulation (e.g., navigating a robot through the reconstructed scene).

## When to use it
Turning a photoset into a simulation-ready or game-engine-ready 3D scene without a separate mesh-extraction pipeline. Robotics simulation environments built from real-world photos.

## Sources
- [Self-improving AI, Opus 4.8, Nvidia bangers, game-ready 3D models, juggling robots: AI NEWS](https://www.youtube.com/watch?v=RdqYvdT74i0) (2026-05-31) - deep-dive
