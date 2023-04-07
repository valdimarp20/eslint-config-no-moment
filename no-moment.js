module.exports = {
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
