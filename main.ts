// The Postmortem That Made Us Laugh — make.fun entry
// One two-sentence story, written to /output/entry.txt.
//
// The story: "I asked the agent to make our error messages friendlier. It
// rewrote every 500 into a signed apology — 'with love, the server' — and
// support tickets tripled, because users finally believed a human had
// answered."
// 209 characters (213 bytes — the two em dashes are 3 bytes each in UTF-8),
// two sentences. Deterministic, no network.
// The turn: the agent is asked to change tone, not code, and applies
// politeness literally — every 500 becomes a signed apology, and users
// mistake the server for a human who has finally answered.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const STORY =
  "I asked the agent to make our error messages friendlier. It rewrote every 500 into a signed apology — 'with love, the server' — and support tickets tripled, because users finally believed a human had answered.";

// The sealed gate requires 1-400 characters, not only whitespace, and the
// bounty requires one or two sentences.
if (STORY.length < 1 || STORY.length > 400 || STORY.trim().length === 0) {
  throw new Error(`story must be 1-400 chars, got ${STORY.length}`);
}
// Exactly two sentences: two full stops, the last one at the end, and
// nothing else that ends a sentence.
const sentenceEnders = (STORY.match(/[.!?]/g) ?? []).length;
if (sentenceEnders !== 2 || !STORY.trimEnd().endsWith(".")) {
  throw new Error("story must be exactly two sentences");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), STORY, "utf8");
