import type { ESLint } from "eslint";

import { suffixIconImport } from "./rules/suffix-icon-import";

const plugin = {
  configs: {
    recommended: {
      plugins: ["local-v9"],
      rules: {
        "local-v9/suffix-icon-import": "error",
      },
    },
  },
  rules: {
    "suffix-icon-import": suffixIconImport,
  },
} satisfies ESLint.Plugin;

export = plugin;
