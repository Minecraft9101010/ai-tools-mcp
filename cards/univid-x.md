# UniVid-X

Video model that simultaneously understands and generates intrinsic video properties: albedo, irradiance, surface normals, and alpha (foreground/background separation).

- **URL:** not mentioned (GitHub repo released)
- **Pricing:** open-source
- **Platform:** local
- **Local-friendly:** yes (intrinsic model ~800 MB; alpha model ~800 MB; uses CogVideoX 1.2.1 as base)
- **Availability:** available
- **Last reviewed:** 2026-05-10

## What it does
UniVid-X takes a single input video and extracts its intrinsic properties — base color (albedo), lighting (irradiance), surface orientation (normals), and foreground/background segmentation (alpha channel). These can then be manipulated separately: relight the scene, replace backgrounds, swap characters, or composite new elements into the video with physical accuracy.

## When to use it
Video post-production where you need to change lighting or background without greenscreen. Extracting foreground subjects from footage. Creating composites or visual effects that need to be physically grounded to the original video's lighting and geometry.

## Sources
- [Self-evolving AI, robot fights, new GPT voice, new local image model, Gemma upgrade: AI NEWS](https://www.youtube.com/watch?v=quxnhOeRz7I) (2026-05-10) - mention
