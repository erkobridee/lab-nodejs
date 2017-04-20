// conf.js
exports.config = {
  // will use local selenium server jar
  // seleniumAddress: 'http://localhost:4444/wd/hub',

  specs: [
    '../src/**/tests/e2e/*.spec.js'
  ]
};
