#!/usr/bin/env node
import { detectPackageManager } from "./lib/package-manager.mjs";

const result = await detectPackageManager(process.cwd());
if (process.argv.includes("--detect")) {
  console.log(JSON.stringify(result));
} else {
  console.log(`Detected ${result.name} from ${result.source}. Use --detect for JSON output.`);
}
