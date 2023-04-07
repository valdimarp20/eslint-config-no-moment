module.exports = {
  meta: {
    type: "problem",
    messages: {
      noMoment: "Usage of Moment.js library is forbidden.",
    },
  },
  create: (context) => ({
    ImportDeclaration: (node) => {
      if (node.source.value === "moment") {
        context.report({
          node: node,
          messageId: "noMoment",
        });
      }
    },
    CallExpression: (node) => {
      if (
        node.callee.name === "require" &&
        node.arguments[0].value === "moment"
      ) {
        context.report({
          node: node,
          messageId: "noMoment",
        });
      }
    },
  }),
};
