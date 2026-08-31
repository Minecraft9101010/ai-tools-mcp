# VisionBanana (Google)

Google's image understanding model that extracts segmentation maps, depth estimation, surface normals, and instance segmentation from images with state-of-the-art accuracy.

- **URL:** not mentioned (technical report only; no public release announced)
- **Pricing:** unknown
- **Platform:** unknown
- **Local-friendly:** unknown
- **Availability:** unreleased (technical report only)
- **Last reviewed:** 2026-04-26

## What it does
VisionBanana (distinct from Ideogram) is a Google model for deep image understanding. It can: perform semantic segmentation with natural-language control (segment "cat ears" or "each price tag" with unique colors), generate depth maps with fine detail even in cluttered scenes, predict surface normals for complex surfaces, and perform instance segmentation at a granular level. Outperforms Meta SAM 3 on image understanding metrics and beats Depth Anything and MoGe on 3D understanding.

## When to use it
Not publicly available yet. Strong candidate for pipelines that need precise image decomposition once released. Particularly strong for fine-grained segmentation where you need language-controlled selection of specific elements.

## Sources
- [The most insane week in AI](https://www.youtube.com/watch?v=ZKfd9S9lOtc) (2026-04-26) - mention
