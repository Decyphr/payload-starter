import antfu from "@antfu/eslint-config";

export default antfu(
  {
    type: "app",
    typescript: true,
    formatters: true,
    react: true,
    stylistic: {
      indent: 2,
      semi: true,
      quotes: "double",
    },
    ignores: [
      "**/migrations/*",
      "src/app/(payload)/admin/importMap.js",
      "**/payload-types.ts",
    ],
  },
  {
    rules: {
      "no-console": ["warn"],
      "antfu/no-top-level-await": ["off"],
      "node/prefer-global/process": ["off"],
      "react/no-unstable-context-value": ["off"],
      "react-refresh/only-export-components": ["off"],
      "node/no-process-env": ["off"],
      "react/no-array-index-key": ["off"],
      "perfectionist/sort-imports": [
        "error",
        {
          internalPattern: ["~/*"],
        },
      ],
      "unicorn/filename-case": [
        "error",
        {
          case: "kebabCase",
          ignore: ["README.md"],
        },
      ],
    },
  },
);
