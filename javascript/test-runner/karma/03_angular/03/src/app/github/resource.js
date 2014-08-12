define(
// require.js dependency injection
[
  './module'
],

// require.js module scope
function(module) {
  'use strict';

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
