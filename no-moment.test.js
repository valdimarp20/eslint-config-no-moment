import { test } from "vitest";
import { RuleTester } from "eslint";
import rule from "./no-moment";

const ruleTester = new RuleTester({
  parserOptions: {
    ecmaVersion: 6,
    sourceType: "module",
  },
});

test("no-moment", () => {
  ruleTester.run("no-moment", rule, {
    valid: [
      {
        code: 'const foo = "bar";',
      },
      {
        code: 'import _ from "lodash";',
      },
    ],
    invalid: [
      {
        code: 'import moment from "moment";',
        errors: [
          {
            message: "Usage of Moment.js library is forbidden.",
          },
        ],
      },
      {
        code: 'const moment = require("moment");',
        errors: [
          {
            message: "Usage of Moment.js library is forbidden.",
          },
        ],
      },
    ],
  });
});
