import basePrettier from "@aleks-thunder/lint-format-base/prettier";

export default {
  ...basePrettier,
  overrides: [
    {
      files: "*.html",
      options: {
        parser: "angular",
      },
    },
  ],
};

