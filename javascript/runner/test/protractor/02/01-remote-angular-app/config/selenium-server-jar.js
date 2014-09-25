// conf.js
exports.config = {
  seleniumServerJar: '../node_modules/protractor/selenium/selenium-server-standalone-2.43.1.jar',
  seleniumPort: 4444,

  specs: [
    '../tests/e2e/*.spec.js'
  ]
};
