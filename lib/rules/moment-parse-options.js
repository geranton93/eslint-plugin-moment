/**
 * @fileoverview moment default constructor
 * @author Anton
 */
"use strict";

const MOMENT_LITERAL_EXCEPTION = "Variable which require moment module must be called 'moment'";
const MOMENT_TIMEZONE_EXCEPTION =
  "Must use moment.utc or moment.tz instead of default moment constructor";

module.exports = {
  meta: {
    type: "suggestion",

    docs: {
      description: "Enforce using non default moment constructor",
      category: "Possible Errors",
      recommended: true,
    },
    fixable: "code",
    schema: [],
  },
  create: (context) => {
    return {
      VariableDeclaration: (node) => {
        if (node.declarations && node.declarations.length === 1) {
          const declaration = node.declarations[0];
          if (
            declaration.init.callee.name === "require" &&
            declaration.init.arguments &&
            declaration.init.arguments.length === 1
          ) {
            const argument = declaration.init.arguments[0];
            if (argument.value === "moment" && declaration.id.name !== "moment") {
              context.report({
                node: node,
                message: MOMENT_LITERAL_EXCEPTION,
              });
            }
          }
        }
      },
      CallExpression: (node) => {
        if (node.callee && node.callee.name === "moment") {
          context.report({
            node: node,
            message: MOMENT_TIMEZONE_EXCEPTION,
          });
        }
      },
      ImportDeclaration: (node) => {
        if (node.source && node.source.type === 'Literal' && node.source.value === 'moment') {
          if (node.specifiers[0].local.name !== 'moment') {
            context.report({
              node: node,
              message: MOMENT_LITERAL_EXCEPTION,
            });
          }
        }
      }
    };
  },
};
