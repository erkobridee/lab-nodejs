define(function(require) {
  'use strict';

  var module = require('./module');

  module.controller(
    // controller name
    'MainCtrl',

    // dependencies injection
    [
      '$scope', '$log',

  // controller definition
  function ($scope, console) {

    console.debug('MainCtrl');

  }]);

});
