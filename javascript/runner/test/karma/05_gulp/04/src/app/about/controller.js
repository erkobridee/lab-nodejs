define(function(require) {
  'use strict';

  var module = require('./module');
  module.controller('AboutCtrl', Controller);

  Controller.$inject = ['$scope'];
  function Controller($scope) {

    $scope.pageName = 'About Page';

  }

});
