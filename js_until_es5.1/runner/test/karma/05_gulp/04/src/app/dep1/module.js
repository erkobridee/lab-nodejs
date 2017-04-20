define(function(require) {
  'use strict';

  var angular = require('angular');
  require('angularRoute');

  return angular.module('dep1', [
    'ngRoute'
  ]);

});
