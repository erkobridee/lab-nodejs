// https://github.com/jprichardson/node-fs-extra
var fse = require('fs-extra');

// http://esprima.org/doc/

var esprima = require('esprima');

var syntax = esprima.parse('var answer = 42;');

var jsonStr = JSON.stringify(syntax, null, 2);

console.log(jsonStr);

fse.outputJson('../output/hello-exprima.ast.json', syntax, function(err) {
  if(!err) console.log('It\'s saved!');
});