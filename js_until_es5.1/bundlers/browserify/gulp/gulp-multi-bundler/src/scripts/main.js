var $ = require('jquery');
var _ = require('lodash');

var math = require('./lib/math');

//----------------------------------------------------------------------------//

var outputs = [
  'sum of 1 + 2 = ' + math.sum(1, 2),
  'multiply of 2 + 3 = ' + math.multiply(2, 3)
];

var displayAreaUI = $('#displayArea');

console.log('---');
_.forEach(outputs, function(message){
  console.log(message);
  displayAreaUI.append('<p>'+ message +'</p>');
});
console.log('---');
