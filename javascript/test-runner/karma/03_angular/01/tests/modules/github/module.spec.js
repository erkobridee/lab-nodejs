describe('Angular.js \'modules.github\' Module', function() {

  var module;

  beforeEach(function() {
    module = angular.module('modules.github');
  });

  it("should be registered", function() {
    expect(module).not.toEqual(null);
  });

  describe("Dependencies:", function() {

    var deps;

    var hasModule = function(m) {
      return deps.indexOf(m) >= 0;
    };

    beforeEach(function() {
      deps = module.value('appName').requires;
    });

    it('should have ngResource as a dependency', function() {
      expect(hasModule('ngResource')).toEqual(true);
    });

  });

});
