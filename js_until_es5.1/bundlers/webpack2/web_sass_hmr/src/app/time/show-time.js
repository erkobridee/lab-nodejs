var $ = require('jquery');
var moment = require('moment');

function renderUI(){
  $('.show-time').append('<p>' + moment().format('MMMM Do YYYY, h:mm:ss a') + '</p>');
};

module.exports.render = renderUI;
