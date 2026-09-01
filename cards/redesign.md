# Redesign

Turns a flat image (or screenshot) back into editable layers by orchestrating OCR, layer generation, and segmentation models — like reverse-engineering a Figma file from a picture.

- **URL:** not mentioned (GitHub)
- **Pricing:** freemium (open-source and free to run locally, under 4GB, but requires an OpenAI API key by default — swappable for a local model)
- **Platform:** local
- **Local-friendly:** yes (under 4GB itself; needs an LLM API or local model for the OCR/orchestration step)
- **Availability:** available
- **Last reviewed:** 2026-08-02

## What it does
Breaks a flat image into separate editable layers (recolor, reposition, resize individual elements) by chaining PaddleOCR (text), Qwen Image Layered (layer generation), and Dino plus SAM2 (segmentation). Outperforms Qwen Image Layered alone on the project's own benchmarks.

## When to use it
Turning a screenshot or flat design back into something closer to an editable Figma/Photoshop file, when you're willing to either supply an OpenAI API key or swap in a local model.

## Sources
- [New Deepseek, Seedance 2.5, Minimax H3, Gemini Robotics, AMD models: AI NEWS](https://www.youtube.com/watch?v=OrcBSpADCGk) (2026-08-02) - deep-dive
