module.exports = {
  meta: {
    type: "problem",
    docs: {
      description: "Forbid the use of the Moment.js library",
      category: "Possible Errors",
    },
    messages: {
      noMoment: "The use of Moment.js library is forbidden.",
    },
  },
  create: function (context) {
    return {
      ImportDeclaration(node) {
        if (node.source.value === "moment") {
          context.report({
            node,
            messageId: "noMoment",
          });
        }
      },
      CallExpression(node) {
        const { callee } = node;
        if (callee.type === "Identifier" && callee.name === "moment") {
          context.report({
            node,
            messageId: "noMoment",
          });
        }
      },
    };
  },
};
