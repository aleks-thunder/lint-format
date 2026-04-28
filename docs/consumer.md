# Consumer usage

Install package:

```bash
npm i -D @lavinmedia/lint-format-base
# or: @lavinmedia/lint-format-angular | @lavinmedia/lint-format-react
```

Add at the project root:

- **`eslint.config.js`** — flat ESLint config (use **`eslint.config.mjs`** if you want ESM without `"type": "module"` in `package.json`).
- **`prettier.config.js`** — Prettier config (same for **`prettier.config.mjs`** or `.prettierrc.json` if you prefer JSON).

**`eslint.config.js`**

```js
import baseEslint from "@lavinmedia/lint-format-base/eslint";
// import angularEslint from "@lavinmedia/lint-format-angular/eslint";

export default baseEslint;
```

**`prettier.config.js`**

```js
import basePrettier from "@lavinmedia/lint-format-base/prettier";
// import angularPrettier from "@lavinmedia/lint-format-angular/prettier";

export default basePrettier;
```
