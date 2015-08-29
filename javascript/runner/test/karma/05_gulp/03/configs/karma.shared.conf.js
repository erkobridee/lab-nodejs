module.exports = function() {

  return {

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '../',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine', 'requirejs'],


    // https://karma-runner.github.io/0.12/config/files.html

    // list of files / patterns to load in the browser
    files: [
      'tests/require.config.js',
      {pattern: 'src/**/*.js', included: false, served: true},
      {pattern: 'tests/**/*.js', included: false, served: true},
      {pattern: 'src/bower_components/**/*.?(js|map)', included: false, served: true, watched: false}
    ],


    // list of files to exclude
    exclude: [
      'src/require.config.js',
      'src/bower_components/**/src/**/*'
    ],

    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      dev: {},
      ci: {
        // source files, that you wanna generate coverage for
        // do not include tests or libraries
        // (these files will be instrumented by Istanbul)
        'src/!(bower_components)/**/!(require.load).js': ['coverage']
      }
    }

  };

};
