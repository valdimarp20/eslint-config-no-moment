module.exports = {
  meta: {
    type: "problem",
    docs: {
      description: "Forbid the use of the Moment.js library",
      category: "Best Practices",
      recommended: true,
    },
  },
  create(context) {
    return {
      ImportDeclaration(node) {
        if (node.source.value === "moment") {
          context.report({
            node,
            message: "The use of Moment.js library is forbidden.",
          });
        }
      },
      CallExpression(node) {
        if (
          node.callee.type === "Identifier" &&
          node.callee.name === "require"
        ) {
          const arg = node.arguments[0];
          if (arg && arg.type === "Literal" && arg.value === "moment") {
            context.report({
              node,
              message: "The use of Moment.js library is forbidden.",
            });
          }
        }
      },
    };
  },
};
