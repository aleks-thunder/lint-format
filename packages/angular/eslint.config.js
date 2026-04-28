import { defineConfig } from "eslint/config";
import baseConfig from "@aleks-thunder/lint-format-base/eslint";
import angular from "angular-eslint";
import eslintConfigPrettier from "eslint-config-prettier";
import prettierPlugin from "eslint-plugin-prettier";

export default defineConfig(
  {
    files: ["**/*.ts"],
    extends: [...baseConfig, ...angular.configs.tsRecommended],
    processor: angular.processInlineTemplates,
    rules: {
      "@angular-eslint/directive-selector": [
        "error",
        {
          type: "attribute",
          prefix: "app",
          style: "camelCase",
        },
      ],
      "@angular-eslint/component-selector": [
        "error",
        {
          type: "element",
          prefix: "app",
          style: "kebab-case",
        },
      ],
    },
  },
  {
    files: ["**/*.html"],
    plugins: {
      prettier: prettierPlugin,
    },
    extends: [...angular.configs.templateRecommended, eslintConfigPrettier],
    rules: {
      "prettier/prettier": ["error", { parser: "angular" }],
      "@angular-eslint/template/attributes-order": [
        "error",
        {
          order: [
            "STRUCTURAL_DIRECTIVE",
            "TEMPLATE_REFERENCE",
            "ATTRIBUTE_BINDING",
            "INPUT_BINDING",
            "TWO_WAY_BINDING",
            "OUTPUT_BINDING",
          ],
          alphabetical: false,
        },
      ],
    },
  },
);

