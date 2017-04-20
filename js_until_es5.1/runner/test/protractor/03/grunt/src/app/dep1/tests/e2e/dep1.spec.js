describe("e2e: dep1 page", function() {
  var page = require('./dep1.po');

  beforeEach(function() {
    page.get();
  });

  it("should value : 'Application Dependency Module Value'", function() {
    // assertions
    expect(page.value.getText()).toContain('Application Dependency Module Value');
  });

  it("should sum 123 + 321 = 444", function() {
    // assertions
    expect(page.sum.getText()).toContain('444');
  });

  it("should message transform...", function() {
    // arrange
    page.messageInput.clear();

    // act
    page.messageInput.sendKeys('hello world');

    // assertions
    expect(page.toExciteMsg.getText()).toContain('hello world!!!');
    expect(page.toQuestionMsg.getText()).toContain('hello world???');
    expect(page.messageReverse.getText()).toContain('dlrow olleh');
    expect(page.messageReverseUpper.getText()).toContain('DLROW OLLEH');
  });

});
