define(function(require) {
  'use strict';

  require('jquery');

  console.log('running...');

  var jrender = require('./jquery-render');

  jrender.append();

  var vrender = require('./vanilla-render');

  vrender.append();

});
