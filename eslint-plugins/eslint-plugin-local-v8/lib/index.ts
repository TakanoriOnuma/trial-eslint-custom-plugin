import type { ESLint } from "eslint";

import { suffixIconImport } from "./rules/suffix-icon-import";

const plugin = {
  configs: {
    recommended: {
      plugins: ["@local/local-v8"],
      rules: {
        "@local/local-v8/suffix-icon-import": "warn",
      },
    },
  },
  rules: {
    "suffix-icon-import": suffixIconImport,
  },
} satisfies ESLint.Plugin;

export = plugin;
