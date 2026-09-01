# Proxy Pose

Tracks the full 3D position and rotation of almost any object in a video, click the points you want followed.

- **URL:** not mentioned (code released)
- **Pricing:** open-source
- **Platform:** local
- **Local-friendly:** yes with caveats (built on Wan 2.1, 30GB base but quantized versions exist; the LoRA itself is only 600MB)
- **Availability:** available
- **Last reviewed:** 2026-07-12

## What it does
Instead of tracking the object directly, it uses a video model to replace the selected region with a simple proxy shape, generates that proxy across the video, and derives 3D movement from its outline with standard geometry. That trick keeps it working where conventional trackers fail: transparent objects, reflective surfaces, fast action, heavy occlusion.

## When to use it
Extracting 3D object trajectories from ordinary 2D footage for VFX, robotics data, or motion analysis, especially on shots conventional trackers choke on.

## Sources
- [Girlfriend simulators, GPT 5.6, Grok 4.5, Seedream 5.0, Muse Spark, robot surgery: AI NEWS](https://www.youtube.com/watch?v=Ti1V7OI2Rro) (2026-07-12) - deep-dive
