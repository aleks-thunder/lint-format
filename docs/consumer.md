# Consumer usage

Install package:

```bash
npm i -D @aleks-thunder/lint-format-base asda
# or: @aleks-thunder/lint-format-angular | @aleks-thunder/lint-format-react
```

Add at the project root:

- **`eslint.config.js`** — flat ESLint config (use **`eslint.config.mjs`** if you want ESM without `"type": "module"` in `package.json`).
- **`prettier.config.js`** — Prettier config (same for **`prettier.config.mjs`** or `.prettierrc.json` if you prefer JSON).

**`eslint.config.js`**

```js
import baseEslint from "@aleks-thunder/lint-format-base/eslint";
// import angularEslint from "@aleks-thunder/lint-format-angular/eslint";

export default baseEslint;
```

**`prettier.config.js`**

```js
import basePrettier from "@aleks-thunder/lint-format-base/prettier";
// import angularPrettier from "@aleks-thunder/lint-format-angular/prettier";

export default basePrettier;
```
