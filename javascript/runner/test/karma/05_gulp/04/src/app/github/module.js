define(function(require) {
  'use strict';

  var angular = require('angular');
  require('angularRoute');
  require('angularResource');

  return angular.module('github', [
    'ngRoute',
    'ngResource'
  ]);

});
