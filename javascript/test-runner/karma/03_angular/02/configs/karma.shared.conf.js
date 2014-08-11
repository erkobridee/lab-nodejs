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

      {pattern: 'src/bower_components/angular/angular.{min.js, map, css}', included: true, served: true, watched:false},
      {pattern: 'src/bower_components/**/*.{js, map, css}', included: false, served: true, watched:false},

      // load app source and test's specs
      'tests/require.config.js',

      // app source
      {pattern: 'src/**/*.{js,css}', included: false, served: true},

      // cache templates
      'src/**/*.html',

      // app tests specs
      {pattern: 'tests/**/*.js', included: false, served: true}

    ],


    // list of files to exclude
    exclude: [
      'src/require.config.js',
      'bower_components/**/src/**/*'
    ],


    preprocessors: {
      dev: {
        'src/**/*.html': ['ng-html2js']
      },
      ci: {
        'src/**/*.html': ['ng-html2js'],
        // source files, that you wanna generate coverage for
        // do not include tests or libraries
        // (these files will be instrumented by Istanbul)
        'src/!(bower_components)/**/*.js': ['coverage']
      }
    },


    ngHtml2JsPreprocessor: {
      // strip this from the file path
      stripPrefix: 'src/'
    }

  };

};
