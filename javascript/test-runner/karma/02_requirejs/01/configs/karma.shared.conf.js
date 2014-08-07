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
      'tests/**/*.js',
      {pattern: 'src/**/*.js', included: false, served: true},
      {pattern: 'bower_components/**/*.{js,map}', included: false, served: true, watched: false},
    ],


    // list of files to exclude
    exclude: [
      'src/require.config.js',
      'bower_components/**/src/**/*'
    ]

  };

};
