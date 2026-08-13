---
name: codex-workflow
description: Translate ECC workflow intents into Codex-native planning, TDD, review, security, and verification.
---

# Codex Workflow Adapter

Use this skill when a user asks for an ECC-style workflow in Codex or refers to one of the upstream Claude commands.

## Command-to-Codex mapping

Treat the upstream slash commands as workflow intents, not literal commands:

| Upstream intent | Codex action |
| --- | --- |
| `plan` | Inspect the repository, identify ownership and risks, then write a concise implementation plan before editing. |
| `tdd` | Define tests first, implement the smallest change, and run focused tests before broader verification. |
| `code-review` | Review the diff for correctness, regressions, security, tenancy, permissions, and missing tests. |
| `verify` | Use `verification-loop` and report build, types, lint, tests, security, and diff status separately. |
| `build-fix` | Reproduce the build failure, isolate the first actionable error, patch it, and rerun the smallest relevant check. |
| `security-review` | Use the `security-review` skill before or alongside changes involving auth, secrets, input, APIs, payments, or sensitive data. |
| `learn` | Use `continuous-learning`; capture only a validated, reusable pattern and keep it reviewable. |
| `checkpoint` | Record objective, decisions, changed files, verification results, and the next action in task context or project notes. |

## Codex boundaries

- Do not install Claude-specific hooks or assume Claude slash commands exist.
- Use Codex tools and the project’s actual package manager, scripts, and CI configuration.
- Preserve the repository’s existing routes, permissions, tenancy, provider boundaries, and persistence behavior.
- Separate static checks from authenticated browser QA, live provider calls, migrations, and production verification.
- State what was actually verified and what remains unverified.

## Default engineering sequence

1. Inspect the repository and current changes.
2. Plan the smallest safe change and define acceptance checks.
3. Write or update focused tests before implementation when practical.
4. Implement with the repository’s conventions.
5. Run focused checks, then `verification-loop` for the final gate.
6. Review the diff and hand off evidence, remaining risks, and next steps.
