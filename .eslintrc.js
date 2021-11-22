module.exports = {
  extends: "next/core-web-vitals",
  rules: {
    "@typescript-eslint/no-empty-function": 0,
    "@typescript-eslint/no-non-null-assertion": 0,
    "import/no-named-as-default-member": 0,
    "import/newline-after-import": "warn",
    "import/no-duplicates": "error",
    "import/order": [
      "warn",
      {
        "newlines-between": "never",
        groups: [
          "builtin",
          "external",
          "object",
          "internal",
          "index",
          "sibling",
          "parent",
        ],
        pathGroups: [
          {
            pattern: "react",
            group: "builtin",
            position: "before",
          },
          {
            pattern: "./*.module.scss",
            group: "parent",
          },
          {
            pattern: "*/*.scss",
            group: "parent",
          },
        ],
        pathGroupsExcludedImportTypes: ["react"],
        alphabetize: {
          order: "asc",
          caseInsensitive: true,
        },
      },
    ],
  },
}
