import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";
import localV8 from "@local/eslint-plugin-local-v8";
import localV9 from "@local/eslint-plugin-local-v9";

export default tseslint.config(
  { ignores: ["dist"] },
  {
    extends: [
      js.configs.recommended,
      ...tseslint.configs.recommended,
      {
        ...localV8.configs.recommended,
        // pluginsの設定がオブジェクト形式に変わったので、pluginsの設定を上書き
        plugins: {
          "@local/local-v8": localV8,
        },
      },
    ],
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
      "@local/local-v9": localV9,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      ...localV9.configs.recommended.rules,
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
      // 上書きルール設定
      "@local/local-v9/suffix-icon-import": "error",
    },
  }
);
