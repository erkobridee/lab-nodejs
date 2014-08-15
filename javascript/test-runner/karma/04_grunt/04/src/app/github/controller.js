define(
// require.js dependency injection
[
  './module'
],

// require.js module scope
function(module) {
  'use strict';

  module.controller(
    // controller name
    'GitHubCtrl',

    // dependencies injection
    [
      '$scope', 'GitHubUsersResource',

  // controller definition
  function (scope, resource) {

    scope.user = null;
    scope.notFound = null;

    scope.login = 'erkobridee';
    scope.findLoginAction = function() {
      getUser(scope.login);
    };

    var getUser = function(findLogin) {
      resource.get(
        {login: findLogin},
        // success 200
        function(res) {
          scope.user = res;
          scope.notFound = null;
        },
        // error 404
        function(result, response) {
          scope.user = null;
          scope.notFound = result.data;
        }
      );
    };

  }]);

});
