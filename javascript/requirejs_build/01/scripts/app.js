define(function(require) {
  'use strict';

  require('jquery');

  console.log('running...');

  var jrender = require('./render/jquery');

  jrender.append();

  var vrender = require('./render/vanilla');

  vrender.append();

});
