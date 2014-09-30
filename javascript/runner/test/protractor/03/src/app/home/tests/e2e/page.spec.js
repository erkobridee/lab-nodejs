describe("e2e: Home Page", function() {
  var page = require('./home.po');

  beforeEach(function() {
    page.get();
  });

  it("should have page name: Home Page", function() {
    expect(page.pageName.getText()).toEqual('Home Page');
  });

});
