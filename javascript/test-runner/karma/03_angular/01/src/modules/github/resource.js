angular.module('modules.github').factory(
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
