# RecGen

AI model that reconstructs multiple 3D objects from one or a few RGBD (image + depth) photos, handling occlusion well.

- **URL:** not mentioned (GitHub repo released)
- **Pricing:** open-source
- **Platform:** local
- **Local-friendly:** yes (runs locally; code released on GitHub)
- **Availability:** available
- **Last reviewed:** 2026-05-10

## What it does
RecGen takes RGBD images (normal photos plus depth information), segments all objects in the scene, and generates complete 3D geometry and textures for each object — including ones that are partially occluded by other objects. Trained on ~200K high-quality 3D assets and 3M+ synthetic RGB-depth images. Outperforms SAM 3D on pose estimation and shape generation benchmarks.

## When to use it
3D scanning or reconstruction from casual photos, especially in cluttered scenes where objects overlap. Useful for robotics training data, game asset creation, or AR/VR content where you need object-level 3D from a single image.

## Sources
- [Self-evolving AI, robot fights, new GPT voice, new local image model, Gemma upgrade: AI NEWS](https://www.youtube.com/watch?v=quxnhOeRz7I) (2026-05-10) - mention
