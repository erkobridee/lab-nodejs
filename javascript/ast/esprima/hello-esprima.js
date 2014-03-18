// http://esprima.org/doc/

var esprima = require('esprima');

var syntax = esprima.parse('var answer = 42;');

var jsonStr = JSON.stringify(syntax, null, 2);

console.log(jsonStr);
