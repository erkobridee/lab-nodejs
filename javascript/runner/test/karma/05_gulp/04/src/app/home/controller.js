define(function(require) {
  'use strict';

  var module = require('./module');
  module.controller('HomeCtrl', Controller);

  Controller.$inject = ['$scope'];
  function Controller($scope) {

    $scope.pageName = 'Home Page';

  }

});
