define(function(require) {
  'use strict';

  var angular = require('angular');
  require('angularRoute');

  return angular.module('home', [
    'ngRoute'
  ]);

});
