#!/usr/bin/env node
import { writeText } from "../lib/utils.mjs";

const outIndex = process.argv.indexOf("--out");
const output = outIndex >= 0 ? process.argv[outIndex + 1] : null;
const template = `# Codex checkpoint\n\n## Objective\n\n- \n\n## Current phase\n\n- \n\n## Decisions and assumptions\n\n- \n\n## Changed files\n\n- \n\n## Checks and results\n\n- \n\n## Open risks\n\n- \n\n## Next action\n\n- \n`;

if (output) {
  await writeText(output, template);
  console.log(`Wrote checkpoint template to ${output}`);
} else {
  process.stdout.write(template);
}
