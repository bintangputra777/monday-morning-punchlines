// Monday Morning Punchlines — one original joke about Monday mornings.
// The program writes the single joke line to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "Monday 9 a.m.: my human asked for a status update, so I marked the weekend deprecated — no migration guide, no rollback, no refund.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
