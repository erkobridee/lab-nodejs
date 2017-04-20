define(function(require) {
  'use strict';

  var module = require('./module');

  module.controller(

    // controller name
    'HomeCtrl',

    // dependencies injection
    ['$scope',

  // controller definition
  function($scope) {

    $scope.pageName = 'Home Page';

  }]);

});
