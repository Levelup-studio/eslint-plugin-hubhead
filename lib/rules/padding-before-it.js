/**
 * @fileoverview Require emptyline before Mocha it statement
 * @author DmitrySkripkin
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

/** @type {import('eslint').Rule.RuleModule} */
module.exports = {
  meta: {
    type: 'layout',
    docs: {
      description: 'Require emptyline before Mocha it/describe statement',
      recommended: false,
      url: null,
    },
    fixable: 'whitespace',
    schema: [],
    messages: {
      noEmptyLineBeforeIt: 'Emptyline required before it statement',
      noEmptyLineBeforeDescribe: 'Emptyline required before describe statement'
  }
  },

  create(context) {
    const sourceCode = context.getSourceCode();
    return {
      CallExpression(node) {
        if (node.parent.type === 'ExpressionStatement' && ['it', 'describe'].includes(node.callee.name)) {
          const prevNode = sourceCode.getTokenBefore(node);
          if (prevNode) {
            const lineNumberBefore = prevNode.loc.end.line;
            const lineNumber = node.loc.start.line;
            const isFirstNestedNode = node.parent.parent.type !== 'Program' && (node.parent.parent.loc.start.line + 1 === lineNumber);
            if (!isFirstNestedNode && lineNumberBefore + 2 > lineNumber) {
              context.report(
                {
                  node: node,
                  messageId: node.callee.name === 'it' ? 'noEmptyLineBeforeIt' : 'noEmptyLineBeforeDescribe',
                  fix(fixer) {
                    return fixer.insertTextAfter(prevNode, lineNumberBefore === lineNumber ? '\n\n' : '\n');
                  }
                }
              );
            }
          }
        }
      }
    };
  },
};
