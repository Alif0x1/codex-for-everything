# Codex hooks boundary

Codex for Everything does not register Claude event hooks. Codex currently loads skills and plugin metadata; it does not consume the Claude `PreToolUse`, `PostToolUse`, `Stop`, or `SessionStart` event schema.

This directory documents safe automation boundaries only:

- Use project scripts and CI for deterministic checks.
- Use the `strategic-compact` skill for context checkpoints.
- Use `continuous-learning` explicitly and review its output before saving.
- Never execute a hook that can edit, delete, transmit, or publish without a clear task scope.

See `hooks/hooks.json` for the non-runtime capability map.
