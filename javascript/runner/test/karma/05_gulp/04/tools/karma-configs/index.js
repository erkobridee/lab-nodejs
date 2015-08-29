var _ = require('lodash'),
    options = require('./options');

var coverageReporterHtml = {
  type : 'html',
  dir : 'tests_out/coverage/',
  subdir: 'html'
};

module.exports = {

  unitSingleRun: _.extend({}, options, {
    reporters: ['html', 'progress', 'coverage'],
    browsers: ['PhantomJS'],
    coverageReporter: coverageReporterHtml,
    singleRun: true
  }),

  unit: _.extend({}, options, {
    reporters: ['html', 'progress', 'coverage'],
    browsers: ['PhantomJS'],
    coverageReporter: coverageReporterHtml
  }),

  specs: _.extend({}, options, {
    reporters: ['html', 'progress']
  }),

  coverage: _.extend({}, options, {
    reporters: ['coverage'],
    browsers: ['PhantomJS'],
    singleRun: true,
    logLevel: 'ERROR',
    coverageReporter: coverageReporterHtml
  }),

  ci: _.extend({}, options, {
    reporters: ['junit', 'coverage'],
    browsers: ['PhantomJS'],
    singleRun: true,
    logLevel: 'ERROR',
    junitReporter: {
      outputFile: 'tests_out/junit/test-results.xml'
    },
    coverageReporter: {
      type : 'lcovonly', // produces an lcov.info file
      dir : 'tests_out/coverage/',
      subdir: '.'
    }
  })

};
