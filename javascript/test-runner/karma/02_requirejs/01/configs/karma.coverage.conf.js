module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '../',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine', 'requirejs'],


    // https://karma-runner.github.io/0.12/config/files.html

    // list of files / patterns to load in the browser
    files: [
      'tests/require.config.js',
      'tests/**/*.js',
      {pattern: 'src/**/*.js', included: false, served: true},
      {pattern: 'bower_components/**/*.{js,map}', included: false, served: true, watched: false},
    ],


    // list of files to exclude
    exclude: [
      'src/require.config.js',
      'bower_components/**/src/**/*'
    ],


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
    reporters: ['coverage'],

    // https://github.com/karma-runner/karma-coverage
    // https://github.com/yahoo/istanbul

    // optionally, configure the reporter
    coverageReporter: {
      type : 'html',
      dir : 'tests_out/coverage/'
    },


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: false,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


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
