define(function(require){
  'use strict';

  var angular = require('angular');

  function startAngularApp() {
    angular.bootstrap(document, [
      require('app/main/package').name
    ]);
  }

  // start angular app
  angular.element(document).ready(startAngularApp);

});
