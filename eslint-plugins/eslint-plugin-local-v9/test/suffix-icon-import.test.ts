import { RuleTester } from "eslint";
import tsParser from "@typescript-eslint/parser";

import { suffixIconImport } from "../lib/rules/suffix-icon-import";

const ruleTester = new RuleTester({
  // コメントアウトしても動きそう？
  languageOptions: {
    parser: tsParser,
  },
});

const validCode = `
import { AccessAlarm as AccessAlarmIcon } from '@mui/icons-material'
`;

const invalidCode = `
import AccessAlarm from '@mui/icons-material/AccessAlarm'
`;

const invalidCode2 = `
import { AccessAlarm } from '@mui/icons-material'
`;

const fixedCode2 = `
import { AccessAlarm as AccessAlarmIcon } from '@mui/icons-material'
`;

const errorMessage = `ファイル指定によるimportは禁止しています。'@mui/icons-material'からimportしてください。`;

const errorMessage2 = "~Iconという名前で使用してください";

ruleTester.run("suffix-icon-import", suffixIconImport, {
  valid: [{ code: validCode }],
  invalid: [
    {
      code: invalidCode,
      errors: [
        {
          message: errorMessage,
        },
      ],
    },
    {
      code: invalidCode2,
      errors: [
        {
          message: errorMessage2,
        },
      ],
      output: fixedCode2,
    },
  ],
});
