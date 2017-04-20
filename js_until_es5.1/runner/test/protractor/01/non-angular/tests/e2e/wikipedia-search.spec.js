// spec.js
describe('wikipedia', function() {

  it('should search for javascript', function() {

    browser.ignoreSynchronization = true;
    browser.get('https://www.wikipedia.org/');

    element(by.id('searchInput')).sendKeys('javascript');

    // more then one input with name go > get first one
    element.all(by.name('go')).get(0).click();

    browser
      .getCurrentUrl()
      .then(function(url) {
        expect(url).toEqual('https://en.wikipedia.org/wiki/JavaScript');
      });

  });

});
