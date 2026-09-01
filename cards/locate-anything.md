# Locate Anything (Nvidia)

Open-source vision-language grounding model that detects and segments any object described in text, across images or video.

- **URL:** not mentioned (GitHub)
- **Pricing:** open-source
- **Platform:** local
- **Local-friendly:** yes (3B params, 7.8GB)
- **Availability:** available
- **Last reviewed:** 2026-05-31

## What it does
Given an image or video and a text description, outputs bounding boxes and segmentation for every matching instance, even in crowded scenes with multiple copies of the target object. Uses parallel box decoding (predicting the whole box in one step instead of coordinate-by-coordinate) for speed and geometric consistency. Trained on 103 million language queries and 785 million bounding boxes spanning object detection, UI/interface elements, OCR, and layout understanding. Code, weights, and training/fine-tuning scripts are released.

## When to use it
Grounding a text description to exact locations in an image or video for downstream tasks like editing, tracking, or UI automation. Fits on most consumer GPUs given its small size.

## Sources
- [Self-improving AI, Opus 4.8, Nvidia bangers, game-ready 3D models, juggling robots: AI NEWS](https://www.youtube.com/watch?v=RdqYvdT74i0) (2026-05-31) - deep-dive
