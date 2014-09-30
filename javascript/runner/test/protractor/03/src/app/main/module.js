define(function(require) {
  'use strict';

  var angular = require('angular');
  require('angularRoute');
  require('angularResource');

  // angular module definition
  return angular.module(
    // module name
    'main',

    // module dependencies
    [
      'ngRoute',
      'ngResource',

      require('app/home/require.load').name,
      require('app/about/require.load').name,
      require('app/dep1/require.load').name,
      require('app/github/require.load').name
    ]
  );

});
