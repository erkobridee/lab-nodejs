define(
// require.js dependency injection
[
  './module'
],

// require.js module scope
function(module) {
  'use strict';

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
