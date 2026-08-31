# Gemma 4 (Multi-Token Prediction)

Google's open-source Gemma 4 model with speculative decoding added, achieving up to 3.1x faster inference without quality loss.

- **URL:** https://huggingface.co/google
- **Pricing:** open-source
- **Platform:** local | API
- **Local-friendly:** yes (designed to run efficiently on consumer hardware)
- **Availability:** available
- **Last reviewed:** 2026-05-10

## What it does
Google added multi-token prediction (speculative decoding) to the Gemma 4 model family. A small lightweight drafter model predicts several tokens ahead; the main model verifies and accepts correct sequences in bulk, enabling generation of multiple tokens per pass. Output quality is identical to standard generation. Speed improvement: up to 3.1x, reaching ~80 tokens/second on benchmarked hardware. Drafter models are released on HuggingFace.

## When to use it
Running Gemma 4 on consumer hardware (laptops, phones, consumer GPUs) where raw inference speed is the bottleneck. Any local deployment where you want faster responses without sacrificing answer quality.

## Sources
- [Self-evolving AI, robot fights, new GPT voice, new local image model, Gemma upgrade: AI NEWS](https://www.youtube.com/watch?v=quxnhOeRz7I) (2026-05-10) - mention
