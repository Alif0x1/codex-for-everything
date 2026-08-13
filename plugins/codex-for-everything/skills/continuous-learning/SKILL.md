---
name: continuous-learning
description: Use when explicitly capturing a validated reusable pattern from a Codex task.
---

# Continuous Learning Skill

Extracts reusable patterns from completed Codex work into reviewable guidance. Learning capture is explicit and reviewable.

## How It Works

When the user asks to capture a learning:

1. **Session Evaluation**: Identify a repeated, validated pattern rather than a one-off fix.
2. **Pattern Detection**: Record the problem, evidence, durable solution, and scope.
3. **Skill Extraction**: Propose a small project note or Codex skill and require review before saving.

## Configuration

Use the repository's existing project-notes or skill conventions when saving a learning. Do not create a global automation or silently write a new skill.

For repository-specific learning, prefer a small `.codex/learned/` note or a reviewed project skill.

## Pattern Types

| Pattern | Description |
|---------|-------------|
| `error_resolution` | How specific errors were resolved |
| `user_corrections` | Patterns from user corrections |
| `workarounds` | Solutions to framework/library quirks |
| `debugging_techniques` | Effective debugging approaches |
| `project_specific` | Project-specific conventions |

## Codex capture rules

- Never save raw prompts, credentials, private customer data, or unverified guesses.
- Prefer a project-local note when the learning is repository-specific.
- Create or update a Codex skill only when the pattern is reusable across tasks.
- Keep the user-visible change small and explain what was captured.

## Related

- [The Longform Guide](https://x.com/affaanmustafa/status/2014040193557471352) - Section on continuous learning
- The user can request a learning capture at any point in the task.
