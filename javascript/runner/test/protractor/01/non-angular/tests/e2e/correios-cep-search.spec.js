// spec.js
describe('correios cep mobile', function() {

  it('should search for 20070-022', function() {

    browser.ignoreSynchronization = true;
    browser.get('http://m.correios.com.br/movel/buscaCep.do');

    element(by.name('cepEntrada')).sendKeys('20070-022');

    element(by.name('cepEntrada')).submit();

    browser
      .getCurrentUrl()
      .then(function(url) {

        expect(url).toEqual('http://m.correios.com.br/movel/buscaCepConfirma.do');

      });

  });

});
