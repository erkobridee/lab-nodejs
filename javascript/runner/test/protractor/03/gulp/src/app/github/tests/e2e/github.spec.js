describe("e2e: GitHub Page", function() {
  var page = require('./github.po');

  beforeEach(function() {
    page.get();
  });

  it("should get not found message", function() {
    // arrange
    page.loginInput.clear();

    // act
    page.loginInput.sendKeys('shoudNotFountUser');
    page.loginInput.sendKeys('\n');  // submit form

    // assertions
    expect(page.notFound.message.getText()).toEqual('Not Found');
  });

  it("should get erkobridee user info", function() {
    // arrange
    page.loginInput.clear();

    // act
    page.loginInput.sendKeys('erkobridee');
    page.loginInput.sendKeys('\n'); // submit form

    // assertions
    expect(page.user.login.getText()).toEqual('erkobridee');
    expect(page.user.type.getText()).toEqual('User');
  });

});
