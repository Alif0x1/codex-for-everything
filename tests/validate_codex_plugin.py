#!/usr/bin/env python3
"""Dependency-free structural checks for the Codex for Everything plugin."""

from __future__ import annotations

import json
import re
import sys
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
PLUGIN = ROOT / "plugins" / "codex-for-everything"
MANIFEST = PLUGIN / ".codex-plugin" / "plugin.json"


def fail(message: str) -> None:
    print(f"FAIL: {message}", file=sys.stderr)
    raise SystemExit(1)


def main() -> None:
    if not MANIFEST.is_file():
        fail("missing Codex plugin manifest")

    manifest = json.loads(MANIFEST.read_text())
    if manifest.get("name") != "codex-for-everything":
        fail("manifest name is incorrect")
    if manifest.get("skills") != "./skills/":
        fail("manifest must expose ./skills/")
    prompts = manifest.get("interface", {}).get("defaultPrompt")
    if not isinstance(prompts, list) or not 1 <= len(prompts) <= 3:
        fail("manifest defaultPrompt must contain one to three prompts")

    skill_files = sorted((PLUGIN / "skills").glob("*/SKILL.md"))
    if len(skill_files) != 13:
        fail(f"expected 13 skills, found {len(skill_files)}")

    names: set[str] = set()
    claude_only_markers = (
        "~/.claude",
        "CLAUDE_PLUGIN_ROOT",
        "PostToolUse",
        "PreToolUse",
        "SessionStart",
        "PreCompact",
        "Stop hook",
    )
    for skill_file in skill_files:
        content = skill_file.read_text()
        frontmatter = re.match(r"\A---\n(.*?)\n---\n", content, re.DOTALL)
        if not frontmatter:
            fail(f"{skill_file.parent.name}: missing YAML frontmatter")
        block = frontmatter.group(1)
        name_match = re.search(r"^name:\s*([^\n]+)$", block, re.MULTILINE)
        description_match = re.search(r"^description:\s*(.+)$", block, re.MULTILINE)
        if not name_match or not description_match:
            fail(f"{skill_file.parent.name}: frontmatter needs name and description")
        name = name_match.group(1).strip().strip('"')
        if name in names:
            fail(f"duplicate skill name: {name}")
        names.add(name)
        for marker in claude_only_markers:
            if marker in content:
                fail(f"{skill_file.parent.name}: contains Claude-only marker {marker!r}")

    forbidden_files = [
        path
        for path in PLUGIN.rglob("*")
        if path.is_file() and (path.suffix == ".sh" or path.name == "config.json")
    ]
    if forbidden_files:
        fail("Claude hook/config artifacts remain: " + ", ".join(str(p.relative_to(ROOT)) for p in forbidden_files))

    print(f"PASS: {len(skill_files)} Codex skills, manifest, and Claude-only boundary checks")


if __name__ == "__main__":
    main()
