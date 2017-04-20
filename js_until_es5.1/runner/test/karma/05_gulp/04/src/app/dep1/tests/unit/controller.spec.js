describe('Testing dep1 Controller', function() {

  var ctrl, scope;

  // excuted before each "it" is run
  beforeEach(function() {

    // load the module
    module('dep1');

    // inject dependencies
    inject(function($controller, $rootScope) {
      scope = $rootScope.$new();

      ctrl = $controller('Dep1Ctrl', {
        $scope: scope
      });
    });

  });

  it('should have a value to equal \'Application Dependency Module Value\'', function() {
    expect(scope.value).toEqual('Application Dependency Module Value');
  });

  it('should sum 123 + 321 to be 444', function() {
    expect(scope.sum(123, 321)).toBe(444);
  });

  it('should make text exciting: aloha!!!', function () {
    expect(scope.toExciteMsg('aloha')).toBe('aloha!!!');
  });

  it('should make question text: Where to go???', function () {
    expect(scope.toQuestionMsg('Where to go')).toBe('Where to go???');
  });

});
