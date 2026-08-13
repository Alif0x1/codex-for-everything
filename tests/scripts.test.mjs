#!/usr/bin/env node
import assert from "node:assert/strict";
import { mkdtemp, readFile, rm, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { spawn } from "node:child_process";
import { fileURLToPath } from "node:url";
import { detectPackageManager } from "../scripts/lib/package-manager.mjs";

const root = fileURLToPath(new URL("../", import.meta.url));
const temp = await mkdtemp(join(tmpdir(), "codex-for-everything-"));
const checkpoint = join(temp, "checkpoint.md");
try {
  await new Promise((resolve, reject) => {
    const child = spawn(process.execPath, [`${root}scripts/codex/checkpoint.mjs`, "--out", checkpoint], { stdio: "pipe" });
    child.on("close", (code) => (code === 0 ? resolve() : reject(new Error(`checkpoint exited ${code}`))));
  });
  const contents = await readFile(checkpoint, "utf8");
  assert.match(contents, /## Objective/);
  assert.match(contents, /## Next action/);
  await writeFile(join(temp, "package.json"), JSON.stringify({ packageManager: "pnpm@10.0.0" }));
  assert.deepEqual(await detectPackageManager(temp), { name: "pnpm", source: "packageManager" });
} finally {
  await rm(temp, { recursive: true, force: true });
}

console.log("PASS: checkpoint script writes a recoverable template");
