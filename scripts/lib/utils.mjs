import { access, mkdir, writeFile } from "node:fs/promises";
import { dirname } from "node:path";

export async function exists(path) {
  try {
    await access(path);
    return true;
  } catch {
    return false;
  }
}

export async function ensureParent(path) {
  await mkdir(dirname(path), { recursive: true });
}

export async function writeText(path, content) {
  await ensureParent(path);
  await writeFile(path, content, "utf8");
}
