# Codex for Everything repository

This repository is a Codex plugin and workflow harness. Keep it self-contained and Codex-native.

- Keep reusable behavior in `plugins/codex-for-everything/skills/*/SKILL.md`.
- Keep role contracts in `agents/`, playbooks in `commands/`, and always-follow guidance in `rules/`.
- Keep deterministic utilities dependency-light and test them from `tests/`.
- Do not add Claude-specific hook events, slash-command registration, or `~/.claude` paths.
- Keep skill frontmatter valid with a concise `name` and `description`.
- Run `python3 tests/validate_codex_plugin.py` after skill or manifest changes.
- Run the Codex plugin validator and each skill validator when available.
- Describe runtime checks separately from static validation and live-provider/browser verification.
- Keep `.agents/plugins/marketplace.json` and the root `marketplace.json` identical; parity is tested.
