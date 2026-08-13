import { exists } from "./utils.mjs";
import { join } from "node:path";
import { readFile } from "node:fs/promises";

const managers = [
  ["pnpm", "pnpm-lock.yaml"],
  ["yarn", "yarn.lock"],
  ["bun", "bun.lockb"],
  ["npm", "package-lock.json"],
];

export async function detectPackageManager(root = process.cwd()) {
  const packageJson = join(root, "package.json");
  if (await exists(packageJson)) {
    const contents = await readFile(packageJson, "utf8").then(JSON.parse).catch(() => null);
    const declared = contents?.packageManager?.split("@")[0];
    if (declared && ["npm", "pnpm", "yarn", "bun"].includes(declared)) return { name: declared, source: "packageManager" };
  }
  for (const [name, lockfile] of managers) {
    if (await exists(join(root, lockfile))) return { name, source: lockfile };
  }
  return { name: "npm", source: "fallback" };
}
