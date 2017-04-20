// conf.js
exports.config = {
  // will use local selenium server jar
  // seleniumAddress: 'http://localhost:4444/wd/hub',

  suites: {
    home: ['../src/app/home/**/tests/e2e/*.spec.js'],
    about: ['../src/app/about/**/tests/e2e/*.spec.js'],
    dep1: ['../src/app/dep1/**/tests/e2e/*.spec.js'],
    github: ['../src/app/github/**/tests/e2e/*.spec.js']
  }

};
