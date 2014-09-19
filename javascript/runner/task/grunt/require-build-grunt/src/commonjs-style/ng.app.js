define(function(require) {
  'use strict';

  var angular = require('angular');

  // start angular app
  angular.element(document).ready(function() {

    angular.bootstrap(document, [
      require('./app/main/require.load').name
    ]);

  });

});
