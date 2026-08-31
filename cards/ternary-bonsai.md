# Ternary Bonsai

Family of ultra-efficient 1.58-bit open-source language models that run on consumer and mobile devices.

- **URL:** https://huggingface.co (search Ternary Bonsai)
- **Pricing:** open-source
- **Platform:** local
- **Local-friendly:** yes (designed specifically for consumer/edge devices)
- **Availability:** available
- **Last reviewed:** 2026-06-01

## What it does
Restricts every model weight to three values (-1, 0, +1) with a shared scaling factor, making models ~9x smaller than standard 16-bit equivalents. Available in 1.7B, 4B, and 8B parameter sizes. The 8B model is only 1.7 GB yet performs close to Qwen 3 8B. Hits 100+ tokens/second on consumer GPUs and mobile chips.

## When to use it
When you need a capable LLM that fits on a phone, edge device, or low-RAM machine. Good across reasoning, coding, and knowledge tasks despite tiny footprint.

## Sources
- [Claude Opus 4.7, Qwen 3.6, Happy Oyster, realtime 3D worlds, new Google TTS: AI NEWS](https://youtube.com/watch?v=G8fqduzB5lc) (2026-04-19) - mention
