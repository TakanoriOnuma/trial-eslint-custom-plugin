import type { ESLint } from "eslint";

import { suffixIconImport } from "./rules/suffix-icon-import";

const plugin = {
  configs: {
    recommended: {
      // pluginsは個別で設定するため、ここでは設定しない
      // plugins: ["@local/local-v9"],
      rules: {
        "@local/local-v9/suffix-icon-import": "warn",
      },
    },
  },
  rules: {
    "suffix-icon-import": suffixIconImport,
  },
} satisfies ESLint.Plugin;

export = plugin;
