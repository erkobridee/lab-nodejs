define(function(require) {
  'use strict';

  var module = require('./module');

  module.config(

    // dependencies injection
    ['$routeProvider',

  function($routeProvider) {

      $routeProvider
        .when(
          '/github',
          {
            controller: 'GitHubCtrl',
            templateUrl: 'app/github/template.html'
          }
        );

  }]);

});
