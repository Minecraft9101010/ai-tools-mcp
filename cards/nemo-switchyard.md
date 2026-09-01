# NeMo SwitchYard (NVIDIA)

Open-source model router that automatically sends each task to the cheapest capable model in a lineup, cutting cost roughly 3x versus always using a top-tier model.

- **URL:** not mentioned (HuggingFace)
- **Pricing:** open-source
- **Platform:** local
- **Local-friendly:** yes (the router itself is lightweight; it routes to whatever models you configure)
- **Availability:** available
- **Last reviewed:** 2026-08-16

## What it does
Acts as a traffic controller across a set of models — routing complex work to a more capable/expensive model and simple tasks to a smaller/cheaper one. In NVIDIA's test pairing it with Opus 4.8 and other models, it completed more tasks than using Opus 4.8 alone while being roughly 3x cheaper.

## When to use it
Multi-model deployments where cost matters and task difficulty varies — pairs naturally with NeMoTron 3.5 Lightning as the fast/cheap end of the routing.

## Sources
- [New Deepseek, GLM 5.3, Grok 4.6, LTX 2.5, Qwen 3.8, Gemini 3.7: AI NEWS](https://www.youtube.com/watch?v=62HSUsS0ypo) (2026-08-16) - deep-dive
