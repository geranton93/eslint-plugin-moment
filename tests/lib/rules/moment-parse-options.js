const rule = require("../../../lib/rules/moment-parse-options");
const { RuleTester } = require("eslint");

const { MOMENT_TIMEZONE_EXCEPTION, MOMENT_LITERAL_EXCEPTION } = require('../../../const');

RuleTester.setDefaultConfig({
    parserOptions: {
        ecmaVersion: 6,
        sourceType: "module",
    }
});

const ruleTester = new RuleTester();
ruleTester.run("moment-parse-options", rule, {
    valid: [
        {
            code: "var moment = require('moment')"
        },
        {
            code: "moment.utc()"
        },
        {
            code: "moment.tz()"
        },
        {
            code: "moment.utc('19/09/2020')"
        },
        {
            code: "moment.tz('19/09/2020 12:00', 'Europe/Kiev')"
        },
        {
            code: "import * as moment from 'moment'"
        },
        {
            code: "import moment from 'moment'"
        }
    ],
    invalid: [
        {
            code: "var literal = require('moment')",
            errors: [
                {
                    message: MOMENT_LITERAL_EXCEPTION
                }
            ]
        },
        {
            code: "import * as literal from 'moment'",
            errors: [
                {
                    message: MOMENT_LITERAL_EXCEPTION,
                    type: "ImportDeclaration",
                }
            ]
        },
        {
            code: "import literal from 'moment'",
            errors: [
                {
                    message: MOMENT_LITERAL_EXCEPTION,
                    type: "ImportDeclaration",
                }
            ]
        },
        {
            code: "moment()",
            errors: [
                {
                    message: MOMENT_TIMEZONE_EXCEPTION
                }
            ]
        },
        {
            code: "moment('19/09/2020')",
            errors: [
                {
                    message: MOMENT_TIMEZONE_EXCEPTION
                }
            ]
        },
    ],
});
