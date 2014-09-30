define(
// require.js dependency injection
[
  './module',
  './controller',
  './routes'
],

// require.js module scope
function() {});

define(function(require) {
  'use strict';

  var module = require('./module');
  require('./controller');
  require('./routes');

  return module;

});
