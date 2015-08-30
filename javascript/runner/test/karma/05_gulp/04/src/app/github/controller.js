define(function(require) {
  'use strict';

  var module = require('./module');
  module.controller('GitHubCtrl', Controller);

  Controller.$inject = ['$scope', 'GitHubUsersResource'];
  function Controller(scope, resource) {

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

  }

});
