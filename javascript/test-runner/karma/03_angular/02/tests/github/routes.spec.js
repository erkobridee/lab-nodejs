describe('Angular.js \'github\' Routes', function() {

  var route;

  beforeEach(function() {
    module('github');

    inject(function($route) {
      route = $route;
    });
  });

  /* only to check if injection work fine
  it('$route should be defined', function() {
    expect(route).not.toEqual(null);
  });
  */

  describe('Routes Map', function() {

    /* only to check if injection work fine
    it('$route should be present', function() {
      expect(route).not.toEqual(null);
    });
    */


    describe('location \'/github\'', function() {

      it('should be defined', function() {
        expect(route.routes['/github']).toBeDefined();
      });

      it('should map to controller DependencyCtrl', function() {
        expect(route.routes['/github'].controller).toBe('GitHubCtrl');
      });

      it('should map to templateUrl app/github/template.html', function() {
        expect(route.routes['/github'].templateUrl).toEqual('app/github/template.html');
      });

    });


  }); //--- end: Routes Map

});
