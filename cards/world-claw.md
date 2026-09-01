# World Claw (Tencent XuanYan)

Multi-agent system that generates an entire open 3D world — layout, terrain, materials, individual objects — from a text description, aimed at game production pipelines.

- **URL:** not mentioned (GitHub)
- **Pricing:** unknown (code repo released; open weights not confirmed)
- **Platform:** local
- **Local-friendly:** unknown
- **Availability:** limited (GitHub repo released; unclear whether full model weights are open-sourced)
- **Last reviewed:** 2026-08-16

## What it does
Uses multiple coordinating agents to first plan a 3D world (layout, materials, terrain), then generates the assets sequentially from coarse to fine, then inspects and refines them for physical consistency — producing an entire reusable open world (depth, normals, and individual objects included) rather than one object at a time.

## When to use it
Game world prototyping and production pipelines needing a full reusable 3D environment generated from a description, once availability is confirmed.

## Sources
- [New Deepseek, GLM 5.3, Grok 4.6, LTX 2.5, Qwen 3.8, Gemini 3.7: AI NEWS](https://www.youtube.com/watch?v=62HSUsS0ypo) (2026-08-16) - deep-dive
