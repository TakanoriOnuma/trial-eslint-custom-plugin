import { RuleTester } from "eslint";
import tsParser from "@typescript-eslint/parser";

import { suffixIconImport } from "../lib/rules/suffix-icon-import";

const ruleTester = new RuleTester({
  // コメントアウトしても動きそう？
  languageOptions: {
    parser: tsParser,
  },
});

ruleTester.run("suffix-icon-import", suffixIconImport, {
  valid: [
    {
      code: "import { AccessAlarm as AccessAlarmIcon } from '@mui/icons-material'",
    },
  ],
  invalid: [
    {
      code: "import AccessAlarm from '@mui/icons-material/AccessAlarm'",
      errors: [
        {
          message:
            "ファイル指定によるimportは禁止しています。'@mui/icons-material'からimportしてください。",
        },
      ],
    },
    {
      code: "import { AccessAlarm } from '@mui/icons-material'",
      errors: [
        {
          message: "~Iconという名前で使用してください",
        },
      ],
      output:
        "import { AccessAlarm as AccessAlarmIcon } from '@mui/icons-material'",
    },
  ],
});
