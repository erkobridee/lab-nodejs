define(function(require) {
  'use strict';

  var angular = require('angular'),
      mainModule = require('./app/main/package');

  function bootstrap() {
    angular.bootstrap(document, [mainModule.name]);
  }

  // start angular app
  angular.element(document).ready(bootstrap);

});
