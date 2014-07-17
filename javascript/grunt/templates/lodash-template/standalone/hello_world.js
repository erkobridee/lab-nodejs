var _ = require('lodash-node');

var templateStr = 'hello <%= greeting %>';

console.log(templateStr);

var templateValues = {
  greeting: 'world'
};

var compiledValue = _.template(templateStr, templateValues);

console.log(compiledValue);

var templateCompiled = _.template(templateStr);


console.log('---\n');
console.log(templateCompiled(templateValues));
