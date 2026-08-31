#!/usr/bin/env node

import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";
import { readdir, readFile } from "fs/promises";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const REPO = "Minecraft9101010/ai-tools-mcp";
const BRANCH = "main";
const CARDS_DIR = "cards";
const CACHE_TTL_MS = 60 * 60 * 1000; // 1 hour

interface CardCache {
  cards: string[];
  fetchedAt: number;
}

let cache: CardCache | null = null;

async function fetchCardsFromGitHub(): Promise<string[]> {
  const listUrl = `https://api.github.com/repos/${REPO}/contents/${CARDS_DIR}?ref=${BRANCH}`;
  const listRes = await fetch(listUrl, {
    headers: { Accept: "application/vnd.github.v3+json", "User-Agent": "ai-tools-mcp" },
  });

  if (!listRes.ok) {
    throw new Error(`GitHub API returned ${listRes.status}: ${await listRes.text()}`);
  }

  const files = (await listRes.json()) as Array<{ name: string; download_url: string }>;
  const mdFiles = files.filter((f) => f.name.endsWith(".md"));

  const cards = await Promise.all(
    mdFiles.map(async (f) => {
      const res = await fetch(f.download_url, { headers: { "User-Agent": "ai-tools-mcp" } });
      return res.text();
    })
  );

  return cards;
}

async function fetchCardsFromLocal(): Promise<string[]> {
  const root = dirname(dirname(fileURLToPath(import.meta.url)));
  const cardsPath = join(root, CARDS_DIR);

  const files = await readdir(cardsPath);
  const mdFiles = files.filter((f) => f.endsWith(".md"));

  return Promise.all(mdFiles.map((f) => readFile(join(cardsPath, f), "utf-8")));
}

async function getCards(): Promise<string[]> {
  if (cache && Date.now() - cache.fetchedAt < CACHE_TTL_MS) {
    return cache.cards;
  }

  let cards: string[];
  try {
    cards = await fetchCardsFromGitHub();
  } catch {
    cards = await fetchCardsFromLocal();
  }

  cache = { cards, fetchedAt: Date.now() };
  return cards;
}

const server = new McpServer({
  name: "ai-tools-mcp",
  version: "1.0.0",
});

server.tool(
  "search_tools",
  "Returns all AI tool cards from the database. Each card includes the tool name, description, pricing, platform, what it does, and when to use it. Sourced from The AI Search YouTube channel. Tip: call this from a sub-agent to keep the main thread's context clean.",
  { query: z.string().optional().describe("Optional search context (currently unused, all cards are returned for the LLM to filter)") },
  async () => {
    const cards = await getCards();
    return {
      content: [
        {
          type: "text" as const,
          text: `# AI Tools Database (${cards.length} tools)\n\nAll cards are included below. Use your own judgment to find the most relevant tools for the task.\n\n---\n\n${cards.join("\n\n---\n\n")}`,
        },
      ],
    };
  }
);

async function main() {
  const transport = new StdioServerTransport();
  await server.connect(transport);
}

main();
