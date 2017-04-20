define(function(require) {
  'use strict';

  var module = require('./module');

  module.config(

    // dependencies injection
    ['$routeProvider',

  function($routeProvider) {

      $routeProvider
        .when(
          '/dep1',
          {
            controller: 'Dep1Ctrl',
            templateUrl: 'app/dep1/template.html'
          }
        );

  }]);

});
