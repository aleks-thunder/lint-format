# Lint/Format preset R&D (semantic-release)

Before publishing real shared presets, we need to validate the end-to-end release pipeline:

1. Make a commit with conventional commit messages (e.g. `feat(...)`, `fix(...)`, `feat()!`, `breaking(...)`, or `feat: ...` with a footer `BREAKING CHANGE: ...` after a blank line — not `BREAKING CHANGE:` as the only line; see [rnd-semantic-release.md](./rnd-semantic-release.md)).
2. Open a PR and merge it to `main`.
3. `semantic-release` runs in CI and (a) creates a GitHub Release and (b) publishes packages to GitHub Packages.
4. Create a second consumer repo and install the published package(s) as dependencies.

- release automation works (versioning + Git tags + GitHub Release creation),
- package publishing works (GitHub Packages registry),
- consumers can install and use the presets.

## Core R&D questions

### 1) `peerDependencies` vs `dependencies` for `eslint` and `prettier`

**Goal:** reduce consumer setup steps while keeping installs predictable.

- `peerDependencies`
  - Benefit: avoids duplicate ESLint/Prettier installations and reduces “two versions installed” problems.
  - Cost: the consumer must explicitly install `eslint` and `prettier` (more actions).
- `dependencies`
  - Benefit: consumer installs fewer direct packages because tooling is brought transitively.
  - Cost: consumers can end up with multiple ESLint/Prettier versions if they already depend on different versions.

**Decision for this project:** use `dependencies` in the shared preset packages to make the consumer onboarding minimal.

### 2) preset module entrypoints vs consumer config file names

- preset module entrypoints (`@lavinmedia/*/eslint`, `@lavinmedia/*/prettier`)
  - Benefit: the package exposes a stable import target, and it aligns well with `package.json` `exports`.
  - Benefit: consumers can reliably extend the preset by referencing your exported module.
- `.eslintrc.`\* inside the published package
  - Cost: config-file discovery and resolution can be brittle once published (path expectations, legacy vs modern config loading).

**Decision for this project:** expose preset module entrypoints via `package.json` `exports`, and use modern consumer config files: `eslint.config.js` and `prettier.config.js`.

### 3) `file:` links vs real semver dependencies after publishing

- `file:` links
  - Work locally in a monorepo for fast iteration.
  - Do **not** translate well after publishing because `file:../base` points to a path that doesn’t exist in the consumer environment.
- Real dependency ranges
  - Ensure that when `@lavinmedia/lint-format-angular` (or `@lavinmedia/lint-format-react`) is installed, `@lavinmedia/lint-format-base` is also installed from the registry.

**Decision for this project:** `@lavinmedia/lint-format-angular` and `@lavinmedia/lint-format-react` depend on `@lavinmedia/lint-format-base` using a portable range.

## Final chosen strategy (applies to this repository)

### Preset packages and exports

- `@lavinmedia/lint-format-base`
  - Exposes preset module entrypoints via `packages/base/package.json` `exports`.
- `@lavinmedia/lint-format-angular` and `@lavinmedia/lint-format-react`
  - Expose their own preset module entrypoints (and extend `@lavinmedia/lint-format-base` presets).

### Dependency model

- `@lavinmedia/lint-format-base`:
  - uses `dependencies` for `eslint` and `prettier`.
- `@lavinmedia/lint-format-angular` and `@lavinmedia/lint-format-react`:
  - depend on `@lavinmedia/lint-format-base` with a portable semver range (demo: `"*"`).
  - do not require the consumer to separately install `eslint/prettier`.

## Expected consumer usage after implementation

- Install only the preset package:
  - `npm i -D @lavinmedia/lint-format-angular`
  - (or `.../react` / `.../base`)
- ESLint config:
  - `eslint.config.js`: `import` from `@lavinmedia/lint-format-angular/eslint` (see [consumer.md](./consumer.md)).
- Prettier config:
  - `prettier.config.js`: `import` from `@lavinmedia/lint-format-angular/prettier` (see [consumer.md](./consumer.md)).
