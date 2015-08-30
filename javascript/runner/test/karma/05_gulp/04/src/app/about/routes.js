define(function(require) {
  'use strict';

  var module = require('./module');
  module.config(configureRoutes);

  configureRoutes.$inject = ['$routeProvider'];
  function configureRoutes($routeProvider) {

    $routeProvider
      .when(
        '/about',
        {
          controller: 'AboutCtrl',
          templateUrl:'app/about/template.html'
        }
      );

  }

});
