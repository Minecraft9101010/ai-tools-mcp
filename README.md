# AI Tools MCP

An MCP server that gives your AI assistant access to a curated database of AI tools. 200+ tool cards extracted from [The AI Search](https://www.youtube.com/@theAIsearch) YouTube channel, each with pricing, platform, use cases, and source links.

Built so you can ask your AI "what tool should I use for X?" and get an answer grounded in real reviews instead of training data.

## Install

Add to your MCP config (Claude Code, Cursor, Windsurf, or any MCP-compatible client):

```json
{
  "mcpServers": {
    "ai-tools": {
      "command": "npx",
      "args": ["-y", "@caseybuilds/ai-tools-mcp"]
    }
  }
}
```

That's it. No API keys, no setup.

## What it does

The server exposes one tool: `search_tools`. When called, it returns every card in the database. Your AI reads them all and picks what's relevant to your question.

Why return everything instead of filtering? Because the AI is better at matching your intent to the right tool than any keyword search would be. A query about "making 3D product mockups" should surface a tool whose card says "generate photorealistic scene compositions," and keyword matching would miss that.

At 200+ cards (~220KB), the full set fits comfortably in any modern LLM's context. If you want to keep your main conversation's context clean, have your AI call this tool from a sub-agent.

## What's in each card

Every card follows a consistent format:

- **Tool name** and one-line description
- **URL**, **pricing** (free / freemium / paid / open-source), **platform** (web / local / API / mobile / etc.)
- **Local-friendly**: whether it runs on consumer hardware
- **What it does**: 2-3 sentence summary
- **When to use it**: practical situations where this is the right pick
- **Sources**: links to the original YouTube reviews with dates and depth (deep-dive vs. mention)

## Where the data comes from

All cards are extracted from video transcripts on [The AI Search](https://www.youtube.com/@theAIsearch), a YouTube channel that reviews AI tools 2-3 times per week. The database is updated automatically when new videos are published. Each card links back to its source video(s).

## For developers

```bash
git clone https://github.com/Minecraft9101010/ai-tools-mcp.git
cd ai-tools-mcp
npm install
npm run dev
```

The server tries to fetch cards from GitHub first (so users always get the latest). If that fails (offline, rate-limited), it falls back to the local `cards/` directory. Cards are cached in memory for one hour.

## License

MIT
