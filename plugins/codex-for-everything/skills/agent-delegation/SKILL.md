---
name: agent-delegation
description: Use when a Codex task benefits from bounded role-based parallel work, review, research, or verification.
---

# Agent delegation

Delegate only when the work can be split into a clear artifact and acceptance check. Use the role cards in `agents/` as concise contracts.

## Delegation contract

Give each role:

- One outcome and one scope boundary.
- The files or evidence it may inspect.
- The expected output format.
- A reminder not to modify unrelated files or perform external side effects.

Keep one integration owner. Parallelize independent read-only audits, test design, or documentation research. Sequence work when later steps depend on an unverified decision.

## Safe defaults

- Do not delegate credential handling, destructive actions, production changes, or ambiguous cleanup.
- Prefer independent evidence over multiple agents editing the same file.
- Resolve conflicts by returning to repository evidence and acceptance criteria.
