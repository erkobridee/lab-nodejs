define(function(require) {
  'use strict';

  var module = require('./module');
  module.config(configureRoutes);

  configureRoutes.$inject = ['$routeProvider'];
  function configureRoutes($routeProvider) {

    $routeProvider
      .when(
        '/404',
        {
          templateUrl: 'app/main/templates/404.html'
        }
      )

      .otherwise({redirectTo:'/404'});

  }

});
