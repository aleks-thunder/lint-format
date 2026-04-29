import basePrettier from "@aleks-thunder/lint-format-base/prettier";

/** React preset: Tailwind class sorting + Prettier options that differ from base. */
export default {
  ...basePrettier,
  trailingComma: "es5",
  arrowParens: "always",
  singleAttributePerLine: true,
  plugins: ["prettier-plugin-tailwindcss"],
};

/**  
 * TODO: do research on this and consider moving it to base config
 * - trailingComma: difference between all and es5
 * - arrowParens: r&d which one is better, it is about having parenthesis around single arguments or not.
 * - singleAttributePerLine: might collide with angular setup
 */
