describe("e2e: About Page", function() {
  var page = require('./about.po');

  beforeEach(function() {
    page.get();
  });

  it("should have page name: About Page", function() {
    expect(page.pageName.getText()).toEqual('About Page');
  });

});
