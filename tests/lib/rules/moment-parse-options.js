const rule = require("../../../lib/rules/moment-parse-options");
const { RuleTester } = require("eslint");

const MOMENT_LITERAL_EXCEPTION = "Variable which require moment module must be called 'moment'";
const MOMENT_TIMEZONE_EXCEPTION = "Must use moment.utc or moment.tz instead of default moment constructor";

const ruleTester = new RuleTester();
ruleTester.run("moment-parse-options", rule, {
    valid: [
        {
            code: "var moment = require('moment')",
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
        }
    ]
});

