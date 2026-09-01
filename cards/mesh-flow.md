# Mesh Flow (Meta)

Meta's fast 3D generator: prompt, point cloud, or image in, actual mesh with vertices and edges out, claimed 18x faster than step-by-step methods.

- **URL:** not mentioned (GitHub)
- **Pricing:** open-source
- **Platform:** local
- **Local-friendly:** unknown (requirements not mentioned)
- **Availability:** available
- **Last reviewed:** 2026-06-14

## What it does
Compresses meshes into a latent space with a Mesh VAE and samples from that space directly, instead of generating a mesh token-by-token like a sentence. Produces real geometry (vertices and edges), not point clouds or soft shapes, at a claimed 18x speedup over other generation methods.

## When to use it
Fast text/image/point-cloud to mesh generation when you need actual editable geometry for a 3D pipeline rather than a preview blob. Code is released.

## Sources
- [RIP Claude Fable, open-source AI unleashed, full body avatars, new Google models, new TTS: AI NEWS](https://www.youtube.com/watch?v=SxiRANj0xLs) (2026-06-14) - deep-dive
