# HiP Preview (Tencent Hunyuan)

Tencent's latest open-source language model — 295B parameters, only 21B active (MoE), 256K context — competitive with models 5x its size.

- **URL:** https://huggingface.co/tencent (GitHub + HuggingFace released)
- **Pricing:** open-source
- **Platform:** local | API
- **Local-friendly:** yes (but ~600 GB total; requires multiple GPUs)
- **Availability:** available
- **Last reviewed:** 2026-04-26

## What it does
HiP Preview is Tencent Hunyuan's flagship language model. At 295B parameters with only 21B active (hybrid MoE), it achieves near-parity with models 5x its size on reasoning and agentic benchmarks, coding, and instruction following. 256K context window. Open-sourced with GitHub, HuggingFace weights, and fine-tuning scripts. From the same Tencent lab that produces Hunyuan 3D and the Hunyuan video generator.

## When to use it
When you want a capable open-source model with an efficiency profile similar to DeepSeek. Teams already in the Tencent/Hunyuan ecosystem. Fine-tuning a large MoE model for specific tasks where 21B active params is sufficient.

## Sources
- [The most insane week in AI](https://www.youtube.com/watch?v=ZKfd9S9lOtc) (2026-04-26) - mention
