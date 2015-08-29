module.exports = (function() {

  var path = require('path'),
      pkg = require('../package');

  //---

  var config = {};

  //---

  // TODO: review configs

  config.paths = {
    src: 'src',
    reports: 'tests_out'
  };

  config.jshint = {
    project : [
      'src/**/*.js',
      '!src/bower_components/**/*.js'
    ],
    specs: [
      'tests/**/*.js'
    ],
    tools   : [
      'gulpfile.js',
      'configs/**/*.js',
      'scripts/**/*.js'
    ]
  };

  config.webserver = {
    port: 1337
  };

  // TODO: review
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
