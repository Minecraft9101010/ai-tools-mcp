# Gemini Robotics 2 (Google DeepMind)

Family of robotics models that combine walking, balancing, reaching, and grasping into one continuous instruction-following sequence — not just tabletop manipulation.

- **URL:** not mentioned (Google AI Studio, trusted tester program)
- **Pricing:** unknown (trusted tester program)
- **Platform:** API | on-device
- **Local-friendly:** yes for the on-device variant (runs locally on the robot, no internet needed); no for the main vision-language-action model
- **Availability:** limited (AI Studio access plus trusted tester signup)
- **Last reviewed:** 2026-08-02

## What it does
Three models: Gemini Robotics 2 (the vision-language-action model that turns instructions plus camera view into motor commands), Gemini Robotics ER2 (higher-level environment/task reasoning and failure correction, can coordinate multiple robots), and Gemini Robotics on-device 2 (a smaller offline version for running directly on a robot). Brings much better dexterous hand control than the previous version — unscrewing a light bulb, tying a trash bag, sealing a Ziploc bag.

## When to use it
Robotics teams building instruction-following humanoid or manipulator systems that need full-body coordination (not just tabletop grasping), especially where offline/on-device operation matters.

## Sources
- [New Deepseek, Seedance 2.5, Minimax H3, Gemini Robotics, AMD models: AI NEWS](https://www.youtube.com/watch?v=OrcBSpADCGk) (2026-08-02) - deep-dive
