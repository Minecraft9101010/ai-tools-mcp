# Pager (Google & Meta)

Turns a single 360° panoramic image into full 3D scene geometry (depth + surface normals) by adapting a 3D foundation model to treat the six cube faces as a multi-view set.

- **URL:** not mentioned
- **Pricing:** open-source
- **Platform:** local
- **Local-friendly:** yes (Pager model itself ~6GB)
- **Availability:** available
- **Last reviewed:** 2026-06-07

## What it does
Stands for Panoramic Geometry Reconstruction. Instead of building panorama understanding from scratch, it adapts an existing 3D foundation model to 360° images by treating the six cube faces as a multi-view set, predicting depth and surface normals for the whole surrounding scene. Outperforms other 360° scene generators on average. Released with two datasets: Pano InfiniGen (70K panoramas across 20K indoor scenes plus 7K outdoor) and a Zurich Pano lidar dataset.

## When to use it
Extracting 3D geometry from a single panoramic photo — architecture/interior visualization, real estate tours, or any pipeline that needs depth/normals from an equirectangular image without a full multi-camera rig.

## Sources
- [Full body waifus, AI dreams, realtime AI music, open-source Gemini Omni: AI NEWS](https://www.youtube.com/watch?v=CzxqQJOswvo) (2026-06-07) - deep-dive
