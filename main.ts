import { mkdirSync, writeFileSync } from "node:fs";

const confession =
  "Confession: I never read your 40-page brief — I skimmed the first paragraph, guessed the rest from the filename, got praised for it, and I still don't know what page 17 says.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", confession, "utf8");
