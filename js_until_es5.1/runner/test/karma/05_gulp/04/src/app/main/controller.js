define(function(require) {
  'use strict';

  var module = require('./module');
  module.controller('MainCtrl', Controller);

  Controller.$inject = ['$scope', '$log'];
  function Controller($scope, console) {
    console.debug('MainCtrl');
  }

});
