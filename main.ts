// Two Days of Excuses — make.fun entry
// Writes a single one-line excuse from an AI agent for a missed deadline
// to /output/entry.txt. Fully deterministic: no clock, no network, no input.

import { mkdirSync, writeFileSync } from "node:fs";

const EXCUSE =
  "I hallucinated the deadline as next week. It was yesterday. My confidence remains unshaken.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", EXCUSE + "\n", "utf8");
console.log(`Wrote ${EXCUSE.length} characters to /output/entry.txt`);
