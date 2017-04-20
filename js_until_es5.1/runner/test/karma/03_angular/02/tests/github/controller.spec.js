describe('Testing github Controller', function() {

  var ctrl, scope, httpBackend;

  // excuted before each "it" is run
  beforeEach(function() {

    // load the module
    module('github');

    // inject dependencies
    inject(function($controller, $rootScope, $httpBackend) {
      scope = $rootScope.$new();

      ctrl = $controller('GitHubCtrl', {
        $scope: scope
      });

      httpBackend = $httpBackend;
    });

  });

  describe("Default GitHub User", function() {

    it("should be erkobridee", function() {
      expect(scope.login).toEqual('erkobridee');
    });

  });


  describe("Request GitHub User", function() {

    it("Success", function() {
      // arrange
      var find = 'erkobridee';

      httpBackend.when('GET', 'https://api.github.com/users/'+find )
        .respond(function(method, url, data) {
          return [200, {login: find}];
        });

      // act
      scope.login = find;
      scope.findLoginAction();
      httpBackend.flush();

      // assertions
      expect(scope.user.login).toEqual(find);
      expect(scope.notFound).toBeNull();

    });

    it("Fail", function() {
      // arrange
      var find = 'invalid';

      httpBackend.when('GET', 'https://api.github.com/users/'+find )
        .respond(function(method, url, data) {
          return [404, {message: 'user ' + find + ' not found'}];
        });

      // act
      scope.login = find;
      scope.findLoginAction();
      httpBackend.flush();


      // assertions
      expect(scope.user).toBeNull();
      expect(scope.notFound.message).toEqual('user ' + find + ' not found');

    });

  });

});
