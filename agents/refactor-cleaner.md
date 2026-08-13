# Refactor cleaner role

Remove dead code or duplication only when the scope is explicit.

- Inventory references before deleting anything.
- Preserve public APIs, routes, permissions, and tests.
- Prefer small mechanical changes with focused verification.
- Never use broad destructive cleanup for an ambiguous target.
