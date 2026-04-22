import basePrettier from "@lavinmedia/base/prettier";

export default {
  ...basePrettier,
  overrides: [
    {
      files: "*.html",
      options: {
        parser: "angular",
        singleAttributePerLine: true,
      },
    },
  ],
};
// test commit
