# Blender MCP

MCP server that connects a coding agent to a running Blender instance so the agent can build and animate 3D models directly.

- **URL:** not mentioned
- **Pricing:** unknown
- **Platform:** local
- **Local-friendly:** yes (runs alongside a local Blender install)
- **Availability:** available
- **Last reviewed:** 2026-07-27

## What it does
An MCP server that exposes a running Blender session (via a local address, e.g. localhost:9876) to an agentic coding harness. Once connected, the agent can build 3D models, set up materials and textures, plan animations (rigging, camera, lighting), and iterate by taking screenshots to verify its own work — all from a single natural-language prompt, without the user touching Blender directly.

## When to use it
Generating or animating 3D assets (mechanical models, vehicles, props) inside Blender by prompting an agentic coding harness (Claude Code, Kimi Code) instead of modeling by hand. Best for one-shot or few-shot builds where you can describe the result and let the agent iterate and self-verify.

## Sources
- [New #1 open source AI model is here! Kimi K3](https://www.youtube.com/watch?v=bEnE5pbpe_Q) (2026-07-17) - mention
- [Claude Opus 5 is a freak](https://www.youtube.com/watch?v=RCsBJz4W4bA) (2026-07-27) - mention
