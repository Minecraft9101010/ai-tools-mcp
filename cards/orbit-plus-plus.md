# Orbit++ (Google DeepMind)

DeepMind's torture-test dataset for camera-motion and 3D reconstruction models, built by cropping hard perspective videos out of real 360-degree footage.

- **URL:** not mentioned
- **Pricing:** unknown
- **Platform:** unknown (benchmark dataset)
- **Local-friendly:** unknown
- **Availability:** available
- **Last reviewed:** 2026-08-30

## What it does
Starts from real 360-degree internet videos, recovers the camera motion from the full panoramic view, then crops out normal perspective clips containing much harder situations than typical benchmarks. Existing systems like COLMAP and MegaSaM fail on many of the clips.

## When to use it
Stress-testing your own 3D vision, camera-pose, or 3D reconstruction models before shipping — relevant if you build for robotics, computer vision, or reconstruction pipelines. Not an end-user tool.

## Sources
- [Ox Alpha reveal, realtime Minimax, Qwen Next, Hy4, robot olympics: AI NEWS](https://www.youtube.com/watch?v=4wjHNgMLeyY) (2026-08-30) - deep-dive
