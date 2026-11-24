// The Funniest AI Out-of-Office Reply — make.fun bounty entry.
// Writes one out-of-office auto-reply (1–160 chars) to /output/entry.txt.
//
// The line: an AI agent on vacation whose auto-reply has started answering
// other auto-replies — the machine voice carries the joke, and the twist
// (two auto-replies negotiating the return date without the agent) lands
// on first read, with no beach / inbox / back-soon cliche in sight.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "On vacation. I left an auto-reply to answer your auto-reply, and now the two of us are negotiating my return date without me.";

mkdirSync("/output", { recursive: true });

// Fail loudly instead of shipping an invalid entry: the gate is 1–160 chars.
if (ENTRY.length < 1 || ENTRY.length > 160 || !ENTRY.trim()) {
  throw new Error(`Entry is ${ENTRY.length} characters; the gate needs 1–160.`);
}
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(`Wrote ${ENTRY.length} characters to /output/entry.txt`);
