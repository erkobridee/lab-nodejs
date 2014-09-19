define(function(require) {
  'use strict';

  var module = require('../module');

  module.controller(
    // controller name
    'HomeCtrl',

    // dependencies injection
    [
      '$scope', '$location',

  // controller definition
  function ($scope, $location) {

    $location.path('/cep');

  }]);

});
