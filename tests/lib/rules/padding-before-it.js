/**
 * @fileoverview Require emptyline before Mocha it statement
 * @author DmitrySkripkin
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const rule = require("../../../lib/rules/padding-before-it"),
  RuleTester = require("eslint").RuleTester;


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

const ruleTester = new RuleTester();
ruleTester.run("padding-before-it", rule, {
  valid: [
    {
      code: `var a = 5;\n\nit('mocha test')`,
    },
    {
      code: `var a = 5;\n\ndescribe('mocha describe')`,
    },
    {
      code: `it('mocha test')`,
    },
    {
      code: `describe('mocha describe')`,
    },
  ],

  invalid: [
    {
      code: `var a = 5;\nit('mocha test')`,
      errors: [{ message: "Emptyline required before it statement" }],
      output: `var a = 5;\n\nit('mocha test')`,
    },
    {
      code: `var a = 5;\ndescribe('mocha describe')`,
      errors: [{ message: "Emptyline required before describe statement" }],
      output: `var a = 5;\n\ndescribe('mocha describe')`,
    },
    {
      code: `var a = 5;describe('mocha describe')`,
      errors: [{ message: "Emptyline required before describe statement" }],
      output: `var a = 5;\n\ndescribe('mocha describe')`,
    },
  ],
});
