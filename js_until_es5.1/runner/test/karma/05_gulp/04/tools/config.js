module.exports = (function() {

  var path = require('path'),
      pkg = require('../package'),
      karmaConfigs = require('./karma-configs');

  //---

  var config = {};

  //---

  // TODO: review configs

  config.paths = {
    src: 'src',
    reports: 'tests_out'
  };

  config.jshint = {
    project: [
      'src/**/*.js',
      '!src/bower_components/**/*.js'
    ],
    tests: [
      'tests/**/*.js'
    ],
    tools: [
      'gulpfile.js',
      'tools/**/*.js'
    ]
  };

  config.webserver = {
    port: 1337
  };

  config.karma = karmaConfigs;


  //---

  return config;

})();
