define(function(require) {
  'use strict';

  var module = require('./module');
  module.config(configureRoutes);

  configureRoutes.$inject = ['$routeProvider'];
  function configureRoutes($routeProvider) {

    $routeProvider
      .when(
        '/github',
        {
          controller: 'GitHubCtrl',
          templateUrl: 'app/github/template.html'
        }
      );

  }

});
