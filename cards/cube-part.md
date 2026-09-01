# Cube Part

Open-source text-to-3D generator that decomposes the object into separate, assemblable part meshes (wheels, body, doors, limbs, etc.).

- **URL:** not mentioned (GitHub)
- **Pricing:** open-source
- **Platform:** local
- **Local-friendly:** yes (under 10GB total)
- **Availability:** available
- **Last reviewed:** 2026-05-31

## What it does
Generates a 3D object from a text prompt using a two-stage process: first the overall shape, then a diffusion transformer with cross-part attention decomposes it into separate part-level meshes that still fit together coherently. The number of parts is user-controllable (e.g., 2, 4, or 8 parts). Output plugs directly into a game engine or simulation and can be animated/moved realistically out of the box. Produces cleaner part boundaries and stronger geometric fidelity than other part-based 3D generators in comparisons.

## When to use it
Generating game-ready or simulation-ready 3D assets that need independently articulated parts (vehicles, robots, characters) rather than a single fused mesh.

## Sources
- [Self-improving AI, Opus 4.8, Nvidia bangers, game-ready 3D models, juggling robots: AI NEWS](https://www.youtube.com/watch?v=RdqYvdT74i0) (2026-05-31) - deep-dive
