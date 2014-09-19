define(
// require.js dependency injection
[
  'angular',
  'angularRoute',
  'angularResource',

  './templates/cache',

  '../cep/require.load'
],

// require.js module scope
function(ng) {
  'use strict';

  // module definition
  return ng.module(
    // module name
    'main',

    // module dependencies
    [
      'ngRoute',
      'ngResource',

      'templatesCache',

      'cep'
    ]
  );

});
