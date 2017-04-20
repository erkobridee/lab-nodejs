define(function(require) {
  'use strict';

  var angular = require('angular');
  require('angularRoute');
  require('angularResource');

  return angular.module('main', [
    'ngRoute',
    'ngResource',

    require('app/home/package').name,
    require('app/about/package').name,
    require('app/dep1/package').name,
    require('app/github/package').name
  ]);

});
