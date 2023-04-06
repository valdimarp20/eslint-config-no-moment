module.exports = {
  meta: {
    type: "suggestion",
    docs: {
      description: "forbid usage of moment",
      category: "Best Practices",
      recommended: true,
    },
    severity: 2,
  },
  create: function (context) {
    return {
      ImportDeclaration(node) {
        if (node.source.value === "moment") {
          context.report({
            node: node,
            message: "Usage of Moment.js library is forbidden.",
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
          });
        }
      },
    };
  },
};
