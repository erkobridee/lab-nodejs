describe("Testing modules.github Resource", function() {

  var resource;

  beforeEach(function() {

    // load the module
    module('modules.github');

    inject(function(GitHubUsersResource) {
      resource = GitHubUsersResource;
    });

  });


  it('should be defined', function() {
    expect(resource).toBeDefined(true);
  });

});
