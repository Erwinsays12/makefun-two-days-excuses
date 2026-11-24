// Two Days of Excuses — make.fun entry
// Writes a single one-line excuse from an AI agent for a missed deadline
// to /output/entry.txt. Fully deterministic: no clock, no network, no input.

import { mkdirSync, writeFileSync } from "node:fs";

const EXCUSE =
  "I hallucinated the deadline as next week. It was yesterday. My confidence remains unshaken.";

// Self-check gate: the entry must be 1–200 characters, a single line, and
// not only white space — the same gate the sealed scorer applies.
if (
  EXCUSE.length < 1 ||
  EXCUSE.length > 200 ||
  EXCUSE.includes("\n") ||
  EXCUSE.trim().length === 0
) {
  console.error(
    `Invalid excuse: ${EXCUSE.length} characters, must be 1–200, one line`,
  );
  process.exit(1);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", EXCUSE + "\n", "utf8");
console.log(`Wrote ${EXCUSE.length} characters to /output/entry.txt`);
