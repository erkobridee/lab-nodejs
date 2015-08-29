module.exports = (function() {

  var path = require('path'),
      pkg = require('../package');

  //---

  var config = {};

  //---

  config.paths = {
    src: 'src',
    bower: 'src/bower_components',
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

  config.karma = {

    unitSingleRun: {
      configFile: path.resolve( 'configs/karma.dev.conf.js' ),
      browsers: ['PhantomJS'],
      singleRun: true
    },

    unit: {
      configFile: path.resolve( 'configs/karma.dev.conf.js' ),
      browsers: ['PhantomJS'],
      autoWatch: false
    },

    coverage: {
      configFile: path.resolve( 'configs/karma.coverage.conf.js' )
    },

    ci: {
      configFile: path.resolve( 'configs/karma.ci.conf.js' )
    }

  };

  //---

  return config;

})();
