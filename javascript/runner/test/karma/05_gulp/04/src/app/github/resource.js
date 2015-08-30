define(function(require) {
  'use strict';

  var module = require('./module');
  module.factory('GitHubUsersResource', Factory);

  Factory.$inject = ['$resource'];
  function Factory($resource) {

    return $resource(
      'https://api.github.com/users/:login'
    );

  }

});
