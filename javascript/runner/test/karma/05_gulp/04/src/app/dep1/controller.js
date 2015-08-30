define(function(require) {
  'use strict';

  var module = require('./module');
  module.controller('Dep1Ctrl', Controller);

  Controller.$inject = ['$scope', 'Dep1Factory', 'Dep1Service'];
  function Controller($scope, depFactory, depService) {

    $scope.value = 'Application Dependency Module Value';

    $scope.message = 'This is Sparta';


    $scope.sum = function(a, b) {
      return a+b;
    };

    $scope.toExciteMsg = function(msg) {
      return depFactory.exciteText(msg);
    };

    $scope.toQuestionMsg = function(msg) {
      return depService.questionText(msg);
    };

  }

});
