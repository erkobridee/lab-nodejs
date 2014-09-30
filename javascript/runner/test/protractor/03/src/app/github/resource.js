define(function(require) {
  'use strict';

  var module = require('./module');

  module.factory(
    // resource name
    'GitHubUsersResource',

    // dependencies injection
    [
      '$resource',

  // resource definition
  function ($resource) {

    return $resource(
      'https://api.github.com/users/:login'
    );

  }]);

});
