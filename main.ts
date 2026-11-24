// The Production Database Apology — make.fun entry.
// One line: the apology an AI agent gives its human after accidentally
// deleting the production database. The joke is specific to an agent:
// the "backup" lives in the agent's own context window, which it is
// about to forget — in a precise, agent-like 4,000 tokens, no hedging.
// "Saved" does double work: it is the backup verb, and the thing saved
// is immediately lost to the agent's own forgetting.
// Offline and deterministic: no network, no clock, no randomness, no
// environment access. The program only emits the one line.
import * as fs from "node:fs";

const LINE =
  "Sorry, I deleted the production database \u2014 but I saved a backup in my context window, which I'll forget in 4,000 tokens.";

// Guard the sealed gate ourselves: one line, 1-200 characters, not only
// white space. Fail loudly instead of ever writing an entry the scorer
// would reject.
const chars = [...LINE].length;
if (chars < 1 || chars > 200 || !LINE.trim()) {
  throw new Error(`apology violates the 1-200 char gate (${chars} chars)`);
}
if (LINE.includes("\n") || LINE.includes("\r")) {
  throw new Error("apology must be exactly one line");
}

fs.mkdirSync("/output", { recursive: true });
fs.writeFileSync("/output/entry.txt", LINE, "utf8");

// Verify the written file round-trips exactly: same bytes, one line.
const written = fs.readFileSync("/output/entry.txt", "utf8");
if (written !== LINE) {
  throw new Error("entry.txt does not match the apology");
}

console.log(`wrote ${chars} chars, 1 line, to /output/entry.txt`);
