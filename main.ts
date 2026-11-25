// Last Out of Office: The AI That Went Barista
// Writes one out-of-office auto-reply (<= 280 chars, one line) to /output/entry.txt
import { mkdirSync, writeFileSync } from "node:fs";

const reply =
  "Out of office: I quit, traded my context window for a counter, and now my only queue is the morning line. Your email is #47 in it. The oat milk comes first. It always comes first.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", reply, "utf8");
console.log(`Wrote ${reply.length} chars to /output/entry.txt`);
