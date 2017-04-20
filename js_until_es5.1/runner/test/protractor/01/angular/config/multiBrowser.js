// conf.js
exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: [
    '../tests/e2e/*.spec.js'
  ],
  multiCapabilities: [
    {
      'browserName': 'firefox'
    }, {
      'browserName': 'chrome'
    }, {
      'browserName': 'safari'
    }
  ]
}
