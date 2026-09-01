# Instella MoE (AMD)

AMD's first from-scratch open-source model, trained entirely on AMD Instinct hardware and the ROCm stack instead of Nvidia/CUDA — with every training checkpoint released.

- **URL:** not mentioned (HuggingFace, GitHub)
- **Pricing:** open-source
- **Platform:** local
- **Local-friendly:** yes ("Think" post-RL version ~32GB)
- **Availability:** available
- **Last reviewed:** 2026-08-02

## What it does
16B-total/2.8B-active mixture-of-experts model trained from scratch on AMD Instinct plus ROCm rather than Nvidia CUDA, using multi-head latent attention and a "far skip collective" technique for cross-GPU efficiency. Reportedly beats similarly sized models like Gemma 4 E4B and a smaller Qwen 3.5. AMD released every training checkpoint (pre-training through RL), recipes, and code, not just the final weights.

## When to use it
If non-CUDA training/inference infrastructure or full training-recipe transparency matters to you; otherwise a solid, mid-sized open model in its weight class.

## Sources
- [New Deepseek, Seedance 2.5, Minimax H3, Gemini Robotics, AMD models: AI NEWS](https://www.youtube.com/watch?v=OrcBSpADCGk) (2026-08-02) - deep-dive
