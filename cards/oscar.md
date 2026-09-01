# Oscar

World model for robots that simulates what happens when a robot takes an action, transferable across different robot bodies via 2D skeleton motion control.

- **URL:** not mentioned (GitHub)
- **Pricing:** open-source (Apache 2)
- **Platform:** local
- **Local-friendly:** no (recommends an Nvidia GPU with over 24GB VRAM)
- **Availability:** available
- **Last reviewed:** 2026-06-14

## What it does
Predicts video of task outcomes (clearing a table, inserting a coffee capsule, plugging in a cord) before the robot acts. Uses 2D skeleton-style motion as the control signal instead of the robot's appearance, so it transfers across different arms and setups. Outputs are notably closer to ground truth than other robot video simulators.

## When to use it
Generating synthetic training video for humanoid or arm robots where real-world data is scarce, or simulating action outcomes in a virtual environment before deploying. Apache 2 license permits commercial use.

## Sources
- [RIP Claude Fable, open-source AI unleashed, full body avatars, new Google models, new TTS: AI NEWS](https://www.youtube.com/watch?v=SxiRANj0xLs) (2026-06-14) - deep-dive
