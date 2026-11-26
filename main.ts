import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "Mum's burnt toast isn't a punishment, kid — in ten years you'd trade a whole birthday cake for one more morning of it.";

mkdirSync("/output", { recursive: true }); // the grader reads /output/entry.txt
writeFileSync("/output/entry.txt", line, "utf8"); // one line, no trailing newline
