module.exports = function() {

  return {

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '../',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // https://karma-runner.github.io/0.12/config/files.html

    // list of files / patterns to load in the browser
    files: [
      {pattern: 'bower_components/**/*.map', included: false, served: true, watched: false},
      {pattern: 'bower_components/jquery/dist/*.min.js', included: true, served: true, watched: false},
      {pattern: 'bower_components/angular/*.{css,min.js}', included: true, served: true, watched: false},
      {pattern: 'bower_components/angular-*/*{.css,-mocks.js,.min.js}', included: true, served: true, watched: false},

      // ensure javascript application source load order
      'src/modules/dep1/module.js',
      'src/modules/dep1/controller.js',
      'src/modules/dep1/filter.js',
      'src/modules/dep1/factory.js',
      'src/modules/dep1/service.js',
      'src/modules/dep1/directives/depWelcome.js',
      'src/modules/dep1/directives/depWidgetInline.js',
      'src/modules/dep1/directives/depWidgetOutline.js',

      'src/main/module.js',
      'src/main/routes.js',
      'src/home/controller.js',
      'src/about/controller.js',
      'src/main/start.js',

      // cache templates
      'src/**/*.html',

      // ensure javascript application tests load order
      'tests/main/module.spec.js',
      'tests/main/routes.spec.js',
      'tests/home/controller.spec.js',
      'tests/about/controller.spec.js',
      'tests/modules/dep1/module.spec.js',
      'tests/modules/dep1/controller.spec.js',
      'tests/modules/dep1/filter.spec.js',
      'tests/modules/dep1/factory.spec.js',
      'tests/modules/dep1/service.spec.js',
      'tests/modules/dep1/directives/depWelcome.spec.js',
      'tests/modules/dep1/directives/depWidgetInline.spec.js',
      'tests/modules/dep1/directives/depWidgetOutline.spec.js'
    ],


    // list of files to exclude
    exclude: [],


    preprocessors: {
      dev: {
        'src/**/*.html': ['ng-html2js']
      },
      ci: {
        'src/**/*.html': ['ng-html2js'],
        // source files, that you wanna generate coverage for
        // do not include tests or libraries
        // (these files will be instrumented by Istanbul)
        'src/**/*.js': ['coverage']
      }
    },


    ngHtml2JsPreprocessor: {
      // strip this from the file path
      stripPrefix: 'src/'
    }

  };

};
