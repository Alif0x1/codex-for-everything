# Codex for Everything repository

This repository is a Codex plugin. Keep the plugin self-contained and Codex-native.

- Keep reusable behavior in `plugins/codex-for-everything/skills/*/SKILL.md`.
- Do not add Claude-specific hook events, slash-command registration, or `~/.claude` paths.
- Keep skill frontmatter valid with a concise `name` and `description`.
- Run `python3 tests/validate_codex_plugin.py` after skill or manifest changes.
- Run the Codex plugin validator and each skill validator when available.
- Describe runtime checks separately from static validation and live-provider/browser verification.
