// conf.js
exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: [
    //'../tests/e2e/*.spec.js'
    '../tests/e2e/wikipedia-search.spec.js',
    '../tests/e2e/correios-cep-search.spec.js'
  ]
}
