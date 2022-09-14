/**
 * @fileoverview Disallow selenium debug()
 * @author DmitrySkripkin
 */
 "use strict";

 //------------------------------------------------------------------------------
 // Requirements
 //------------------------------------------------------------------------------
 
 const rule = require("../../../lib/rules/tests-debug"),
   RuleTester = require("eslint").RuleTester;
 
 
 //------------------------------------------------------------------------------
 // Tests
 //------------------------------------------------------------------------------
 
 const ruleTester = new RuleTester();
 ruleTester.run("padding-before-it", rule, {
   valid: [
     {
       code: `A.escape()`,
     },
     {
       code: `//A.debug()`,
     }
   ],
 
   invalid: [
     {
       code: `A.debug()`,
       errors: [{ message: "Selenium debug is not allowed" }],
       output: ``,
     }
   ],
 });
 