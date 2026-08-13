#!/usr/bin/env node
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL("../", import.meta.url));
const rootMarketplace = JSON.parse(await readFile(`${root}marketplace.json`, "utf8"));
const installedMarketplace = JSON.parse(await readFile(`${root}.agents/plugins/marketplace.json`, "utf8"));
assert.deepEqual(rootMarketplace, installedMarketplace);

const hooks = JSON.parse(await readFile(`${root}hooks/hooks.json`, "utf8"));
assert.equal(hooks.runtime, "codex");
assert.deepEqual(hooks.events, []);

const packageJson = JSON.parse(await readFile(`${root}package.json`, "utf8"));
assert.equal(packageJson.type, "module");
assert.match(packageJson.scripts.validate, /validate_codex_plugin/);

console.log("PASS: marketplace parity, hook boundary, and package scripts");
