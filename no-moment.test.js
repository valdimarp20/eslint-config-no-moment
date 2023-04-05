import { test } from "vitest";
import rule from "./no-moment";
import { RuleTester } from "eslint";

const ruleTester = new RuleTester({
  parserOptions: { ecmaVersion: 2022, sourceType: "module" },
});

test("no-moment", () => {
  ruleTester.run("no-moment", rule, {
    valid: [
      {
        code: "import moment from 'other-library';",
      },
      {
        code: "const date = new Date();",
      },
      {
        code: "const day = 1;",
      },
      {
        code: "const month = 'January';",
      },
    ],
    invalid: [
      {
        code: "import moment from 'moment';",
        errors: [{ messageId: "noMoment" }],
      },
      {
        code: "import * as moment from 'moment';",
        errors: [{ messageId: "noMoment" }],
      },
      {
        code: "const now = moment();",
        errors: [{ messageId: "noMoment" }],
      },
      {
        code: "const today = moment().format('YYYY-MM-DD');",
        errors: [{ messageId: "noMoment" }],
      },
    ],
  });
});
