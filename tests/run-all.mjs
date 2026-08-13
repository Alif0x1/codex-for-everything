#!/usr/bin/env node
import { readdir } from "node:fs/promises";
import { spawn } from "node:child_process";
import { fileURLToPath } from "node:url";

const testDir = fileURLToPath(new URL("./", import.meta.url));
const testFiles = (await readdir(testDir)).filter((file) => file.endsWith(".test.mjs"));
let failed = 0;

for (const file of testFiles) {
  await new Promise((resolve) => {
    const child = spawn(process.execPath, [fileURLToPath(new URL(`./${file}`, import.meta.url))], { stdio: "inherit" });
    child.on("close", (code) => {
      if (code !== 0) failed += 1;
      resolve();
    });
  });
}

if (failed) process.exitCode = 1;
else console.log(`PASS: ${testFiles.length} test files`);
