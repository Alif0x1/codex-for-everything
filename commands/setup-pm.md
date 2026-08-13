# Package-manager playbook

Detect the project’s package manager before running commands:

```bash
node scripts/setup-package-manager.mjs --detect
```

Respect `packageManager`, lockfiles, project guidance, and existing scripts. Do not create a new lockfile or switch package managers casually.
