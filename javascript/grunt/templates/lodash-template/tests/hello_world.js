var _ = require('lodash-node');

var templateStr = 'hello <%= value %>';

console.log(templateStr);

var templateValues = {
  value: 'world'
};

var compiledValue = _.template(templateStr, templateValues);

console.log(compiledValue);

var templateCompiled = _.template(templateStr);


console.log('---\n');
console.log(templateCompiled(templateValues));
