# Robin

Closed-loop multi-agent scientific discovery system that generates hypotheses, then analyzes real lab data to refine them and loop again.

- **URL:** not mentioned
- **Pricing:** unknown
- **Platform:** unknown
- **Local-friendly:** no
- **Availability:** unreleased
- **Last reviewed:** 2026-05-28

## What it does
Published in Nature alongside Google's Co-Scientist paper. Uses specialized agents (Crow for literature review, Falcon for deep drug/treatment reports, Finch for lab data analysis) in a loop: propose a hypothesis, humans run the physical experiment, Finch writes and runs its own code to analyze the raw results (using 8 parallel instances with consensus voting for reliability), and the findings feed back into the next round. In a real trial on dry age-related macular degeneration, it synthesized 551 papers and completed a full experiment-analyze-iterate cycle in under 2 hours for about $10.76 in compute, versus an estimated 400 hours of human researcher time, surfacing multiple validated drug candidates (Y27632, ripasudil, KL001) that reversed disease-relevant cell damage.

## When to use it
Research labs wanting an AI system that goes beyond hypothesis generation into actually interpreting messy raw experimental data (RNA sequencing, statistical comparisons) and proposing the next experiment. Not yet publicly available; demonstrated only in the published Nature paper.

## Sources
- [The acceleration is here!](https://www.youtube.com/watch?v=QvN6Tu6dHYM) (2026-05-28) - deep-dive
