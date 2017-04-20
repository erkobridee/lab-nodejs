define(function(require) {
  'use strict';

  var module = require('./module');

  module.config(

    // dependencies injection
    ['$routeProvider', '$httpProvider',

  // routes definition
  function ($routeProvider, $httpProvider) {

    // allow to access cross domain resource
    $httpProvider.defaults.useXDomain = true;

    $routeProvider
      .when(
        '/cep',
        {
          controller: 'CepCtrl',
          templateUrl: 'app/cep/template.html'
        }
      );

  }]);

});

