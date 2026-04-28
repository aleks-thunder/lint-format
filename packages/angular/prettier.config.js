import basePrettier from "@lavinmedia/lint-format-base/prettier";

export default {
  ...basePrettier,
  overrides: [
    {
      files: "*.html",
      options: {
        parser: "angular",
        "singleAttributePerLine": true
      },
    },
  ],
};

