module.exports = {

  // frameworks to use
  // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
  frameworks: ['jasmine', 'requirejs'],

  // https://karma-runner.github.io/0.12/config/files.html

  // list of files / patterns to load in the browser
  files: [
    {pattern: 'src/bower_components/angular/angular.?(min.js|map|css)', included: true, served: true, watched:false},
    {pattern: 'src/bower_components/**/*.?(js|map)', included: false, served: true, watched:false},

    // load app source and test's specs
    'tests/require.config.js',

    // app source and tests specs
    {pattern: 'src/**/*.?(js|css)', included: false, served: true},

    // cache templates
    'src/**/*.html'
  ],

  // list of files to exclude
  exclude: [
    'src/require.config.js',
    'src/bower_components/**/src/**/*'
  ],

  // preprocess matching files before serving them to the browser
  // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
  preprocessors: {
    'src/**/*.html': ['ng-html2js'],
    // source files, that you wanna generate coverage for
    // do not include tests or libraries
    // (these files will be instrumented by Istanbul)
    '{src,src/!(bower_components)/!(tests){,/!(tests)}}/!(require.load).js': ['coverage']
  },

  ngHtml2JsPreprocessor: {
    // strip this from the file path
    stripPrefix: 'src/'
  },

  // start these browsers
  // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
  browsers: ['PhantomJS', 'Chrome', 'Firefox'],

  // enable / disable colors in the output (reporters and logs)
  colors: true,

  logLevel: 'INFO',

  // web server port
  port: 9876

};
