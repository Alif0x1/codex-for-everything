#!/usr/bin/env node
import { readFile, readdir } from "node:fs/promises";
import { join, relative } from "node:path";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL("../", import.meta.url));
const plugin = join(root, "plugins/codex-for-everything");
const required = ["agents", "commands", "rules", "hooks", "scripts", "contexts", "examples", "mcp-configs", "tests"];
const forbiddenRuntimeMarkers = ["CLAUDE_PLUGIN_ROOT", "PostToolUse", "PreToolUse", "SessionStart", "PreCompact", "Stop hook"];

for (const directory of required) {
  try {
    await readdir(join(root, directory));
  } catch {
    throw new Error(`Missing required directory: ${directory}`);
  }
}

const manifest = JSON.parse(await readFile(join(plugin, ".codex-plugin/plugin.json"), "utf8"));
if (manifest.name !== "codex-for-everything") throw new Error("Unexpected plugin name");
if (manifest.version !== "0.3.2") throw new Error("Plugin version must be 0.3.2");

const skillDirs = await readdir(join(plugin, "skills"), { withFileTypes: true });
const skillFiles = skillDirs.filter((entry) => entry.isDirectory()).map((entry) => join(plugin, "skills", entry.name, "SKILL.md"));
if (skillFiles.length !== 19) throw new Error(`Expected 19 skills, found ${skillFiles.length}`);

for (const file of skillFiles) {
  const body = await readFile(file, "utf8");
  if (!body.startsWith("---\n") || !body.includes("\nname:") || !body.includes("\ndescription:") || !body.includes("\n---\n")) {
    throw new Error(`Invalid skill frontmatter: ${relative(root, file)}`);
  }
  if (forbiddenRuntimeMarkers.some((marker) => body.includes(marker))) {
    throw new Error(`Claude runtime marker in skill: ${relative(root, file)}`);
  }
}

console.log(`PASS: Codex structure, manifest, and ${skillFiles.length} skill boundaries`);
