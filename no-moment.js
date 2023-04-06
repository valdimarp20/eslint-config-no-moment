module.exports = {
  meta: {
    type: "suggestion",
    docs: {
      description: "forbid usage of moment",
      category: "Best Practices",
      recommended: true,
    },
    fixable: "code",
    schema: [],
  },
  create: function (context) {
    return {
      ImportDeclaration(node) {
        if (node.source.value === "moment") {
          context.report({
            node: node,
            message: "Usage of Moment.js library is forbidden.",
            fix: (fixer) => {
              return fixer.remove(node);
            },
          });
        }
      },
      CallExpression(node) {
        if (
          node.callee.name === "require" &&
          node.arguments[0].value === "moment"
        ) {
          context.report({
            node: node,
            message: "Usage of Moment.js library is forbidden.",
            fix: (fixer) => {
              return fixer.remove(node);
            },
          });
        }
      },
    };
  },
};
