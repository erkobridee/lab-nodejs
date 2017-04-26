var $ = require('jquery');
var sum = require('./sum');

function renderUI(){
  var result = 'sum of 10 + 5 = ' + sum(10, 5);
  $('.sum-result').append('<p>' + result + '</p>');
};

module.exports.render = renderUI;
