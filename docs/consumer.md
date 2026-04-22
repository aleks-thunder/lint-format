# Consumer usage

Install package:

```bash
npm i -D @lavinmedia/base
# or: @lavinmedia/angular | @lavinmedia/react
```

Add at the project root:

- **`eslint.config.js`** — flat ESLint config (use **`eslint.config.mjs`** if you want ESM without `"type": "module"` in `package.json`).
- **`prettier.config.js`** — Prettier config (same for **`prettier.config.mjs`** or `.prettierrc.json` if you prefer JSON).

**`eslint.config.js`**

```js
import baseEslint from "@lavinmedia/base/eslint";
// import angularEslint from "@lavinmedia/angular/eslint";

export default baseEslint;
```

**`prettier.config.js`**

```js
import basePrettier from "@lavinmedia/base/prettier";
// import angularPrettier from "@lavinmedia/angular/prettier";

export default basePrettier;
```
