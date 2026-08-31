# AnyRecon

3D reconstruction from unordered, sparse, or casually captured photos, using a global scene memory to stay coherent even with just 2-4 input images.

- **URL:** not mentioned (GitHub released; 614 MB model + uses CogVideoX 1.2.1)
- **Pricing:** open-source
- **Platform:** local
- **Local-friendly:** yes (614 MB; uses CogVideoX 1.2.1 which fits consumer GPUs)
- **Availability:** available
- **Last reviewed:** 2026-05-03

## What it does
AnyRecon takes a set of photos of a scene — even just 2, captured in any order and from any angle — and reconstructs a coherent 3D point cloud. Unlike methods that process one or two frames at a time, AnyRecon maintains a global memory of the scene throughout processing, preventing inconsistencies when input is sparse or unordered. Outperforms ViewCrafter and Uni3C on detail and coherence. Model is very small at 614 MB.

## When to use it
Quick 3D scene capture from casual smartphone photos. Architectural documentation, object scanning, or creating 3D assets from reference photos without specialized capture equipment. Works well when you can't control the shooting setup.

## Sources
- [Robot girlfriends, recursive AI agents, full AI research, Happy Horse: AI NEWS](https://www.youtube.com/watch?v=7r_WJ9xpne0) (2026-05-03) - mention
