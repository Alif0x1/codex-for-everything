---
name: git-workflow
description: Use when preparing Codex changes for commit, branch publication, review, or remote verification.
---

# Git workflow

Inspect `git status --short --branch`, the diff, and the remote before changing history. Preserve unrelated user work.

## Commit loop

1. Confirm the intended scope.
2. Run focused checks.
3. Stage explicit paths when the worktree is mixed.
4. Review the staged diff and whitespace.
5. Commit with a concise message.
6. Push the intended branch with tracking.
7. Verify the remote commit and branch.

Do not force-push, reset, delete branches, or rewrite history without explicit authorization.
