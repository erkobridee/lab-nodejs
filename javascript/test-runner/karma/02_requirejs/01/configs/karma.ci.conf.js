var sharedConfig = require('./karma.shared.conf');

module.exports = function(config) {

  var shared = sharedConfig();

  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: shared.basePath,


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: shared.frameworks,


    // https://karma-runner.github.io/0.12/config/files.html

    // list of files / patterns to load in the browser
    files: shared.files,



    // list of files to exclude
    exclude: shared.exclude,


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      // source files, that you wanna generate coverage for
      // do not include tests or libraries
      // (these files will be instrumented by Istanbul)
      'src/**/*.js': ['coverage']
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['junit', 'coverage'],

    // https://karma-runner.github.io/0.12/plus/jenkins.html

    junitReporter: {
      outputFile: 'tests_out/junit/test-results.xml'
    },

    // https://github.com/karma-runner/karma-coverage
    // https://github.com/yahoo/istanbul

    // optionally, configure the reporter
    coverageReporter: {
      type : 'lcovonly', // produces an lcov.info file
      dir : 'tests_out/coverage/',
      subdir: '.'
    },


    // web server port
    port: 9871,


    // enable / disable colors in the output (reporters and logs)
    colors: false,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_WARN,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: false,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['PhantomJS'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true
  });
};
