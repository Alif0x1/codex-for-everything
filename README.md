# Codex for Everything

Codex-native engineering workflows adapted from WorldFlowAI's [Everything Claude Code](https://github.com/WorldFlowAI/everything-claude-code) collection.

This repository packages reusable Codex skills for planning, architecture, frontend and backend patterns, TDD, security review, evaluation, verification, and reviewable learning capture. Claude-only slash commands, hook events, and `~/.claude` configuration are intentionally excluded.

## Install in Codex

```bash
codex plugin marketplace add Alif0x1/codex-for-everything
codex plugin add codex-for-everything@codex-for-everything
```

Start a new Codex task after installation so the skills are discovered.

## Included skills

- `codex-workflow` — maps common ECC workflow intents to Codex behavior
- `backend-patterns` and `frontend-patterns` — production implementation patterns
- `coding-standards` — maintainable TypeScript, JavaScript, React, and Node.js conventions
- `tdd-workflow` — test-first feature and bug-fix workflow
- `security-review` — auth, input, API, secret, payment, and sensitive-data review
- `verification-loop` — build, types, lint, tests, security, and diff gates
- `eval-harness` — capability, regression, model, and human evaluation design
- `continuous-learning` — explicit, reviewable capture of validated reusable patterns
- `strategic-compact` — context checkpoint guidance for Codex tasks
- `clickhouse-io` — ClickHouse analytics patterns
- `project-guidelines-example` — a project-specific guidance template

## Test

Run the dependency-free repository checks:

```bash
python3 tests/validate_codex_plugin.py
```

For full Codex manifest validation, use the Codex plugin validator when the local Codex skill tooling is available.
