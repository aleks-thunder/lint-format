**Local development without release**

**Goal:** test `base -> angular/react -> consumer` changes locally before publishing, without machine-specific `file:` paths.

**Recommended workflow: `yalc`**

1. Install yalc once:
   - `npm i -g yalc`
2. In this preset repo, publish local snapshots:
   - `cd packages/base && yalc publish`
   - `cd ../angular && yalc publish` (or `../react`)
3. In consumer repo, add local packages:
   - `yalc add @aleks-thunder/base @aleks-thunder/angular`
   - then `npm install`
4. After each preset change, sync again:
   - from changed preset package folder (`packages/base`, `packages/angular`, or `packages/react`):
     - `yalc push`
   - in consumer repo:
     - `yalc update @aleks-thunder/base @aleks-thunder/angular`
     - `npm install`
5. If lint output in editor does not refresh:
   - open Command Palette and run `ESLint: Restart ESLint Server`

**Why this works:** `yalc` behaves like a lightweight local registry, so dependency resolution is realistic and independent of folder structure.

**Trade-offs:**

- Works across machines and teams; no hardcoded relative paths.
- Close to real package-consumer behavior.
- Keep CI/release flows on registry versions (`@aleks-thunder/*@x.y.z`), not local `yalc` artifacts.
