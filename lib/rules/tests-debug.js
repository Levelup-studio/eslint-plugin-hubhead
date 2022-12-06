/**
 * @fileoverview Disallow selenium debug()
 * @author DmitrySkripkin
 */
 "use strict";

 //------------------------------------------------------------------------------
 // Rule Definition
 //------------------------------------------------------------------------------
 
 /** @type {import('eslint').Rule.RuleModule} */
 module.exports = {
   meta: {
     type: 'problem',
     docs: {
       description: 'Selenium debug is not allowed',
       recommended: false,
       url: null,
     },
     fixable: 'code',
     schema: [],
     messages: {
       debug: 'Selenium debug is not allowed',
   }
   },
 
   create(context) {
     return {
       MemberExpression(node) {
         if (node.parent.type === 'CallExpression'
          && ['debug'].includes(node.property.name)
          && ['AB', 'A', 'B'].includes(node.parent.property.name)
         ) {
               context.report(
                {
                    node: node,
                    messageId: 'debug',
                    fix(fixer) {
                        return fixer.remove(node.parent)
                    }
                }
            );
        }
       }
     };
   },
 };
 