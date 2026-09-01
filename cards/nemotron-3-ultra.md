# Nemotron 3 Ultra (NVIDIA)

NVIDIA's largest open-source agentic model — a 550B MoE built for long, expensive multi-step agent workflows (planning, tool calls, verification) at lower cost per task.

- **URL:** https://huggingface.co (NVIDIA)
- **Pricing:** open-source
- **Platform:** local | API
- **Local-friendly:** no (350GB, needs multiple high-end GPUs)
- **Availability:** available
- **Last reviewed:** 2026-06-07

## What it does
550B-parameter MoE (55B active) built specifically for agentic workflows — planning, tool use, file reads, subtask delegation, verification across many turns. Uses a hybrid Mamba-transformer architecture for long context, NVFP4 quantization, and multi-token prediction. Has a 1M-token context window, roughly 5x faster inference than other leading open models in NVIDIA's comparison, and about 30% lower cost per completed task.

## When to use it
Long-running, multi-step agentic workflows where inference cost and speed compound across many turns, if you have multi-GPU hardware to run it.

## Sources
- [Full body waifus, AI dreams, realtime AI music, open-source Gemini Omni: AI NEWS](https://www.youtube.com/watch?v=CzxqQJOswvo) (2026-06-07) - deep-dive
