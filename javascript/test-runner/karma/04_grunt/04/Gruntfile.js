module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),



    jshint: {
      grunt: ['Gruntfile.js'],
      project: [
        'src/**/*.js',
        '!src/bower_components/**/*.js',
        'tests/**/*.js'
      ]
    },



    clean: {
      reports: ['tests_out']
    },



    karma: {

      options: {
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

          // app source and tests specs
          {pattern: 'src/**/*.{js,css}', included: false, served: true},

          // cache templates
          'src/**/*.html'
        ],

        // list of files to exclude
        exclude: [
          'src/require.config.js',
          'bower_components/**/src/**/*'
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

        logLevel: 'INFO',

        // web server port
        port: 9876

      },

      specs: {
        reporters: ['html', 'progress']
      },

      unit: {
        reporters: ['html', 'progress', 'coverage'],
        browsers: ['Chrome'],
        autoWatch: false,
        background: true,
        coverageReporter: '<%= karma.coverage.coverageReporter %>'
      },

      coverage: {
        reporters: ['coverage'],
        browsers: ['PhantomJS'],
        singleRun: true,
        logLevel: 'ERROR',
        coverageReporter: {
          type : 'html',
          dir : 'tests_out/coverage/',
          subdir: 'html'
        }
      },

      ci: {
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
      }

    },



    watch: {

      project: {
        files: [
          'src/**/*',
          '!src/bower_components/**/*',
          '!src/**/tests/**/*'
        ],
        tasks: ['newer:jshint:project'],
        options: {
          livereload: 35728
        }
      },

      coverage: {
        files: [
          'tests_out/coverage/html/index.html'
        ],
        options: {
          livereload: 35729
        }
      },

      unit: {
        files: ['src/**/*.js', 'tests/**/*.js'],
        tasks: ['newer:jshint:project', 'karma:unit:run'],
      },

    },



    open: {
      coverage: {
        path: 'tests_out/coverage/html/index.html'
      }
    },



    connect: {

      standalone: {
        options: {
          port: 8000,
          hostname: '*',
          base: 'src',
          open: 'http://localhost:8000',
          keepalive: true
        }
      },

      project: {
        options: {
          port: 9000,
          hostname: '*',
          base: 'src',
          open: 'http://localhost:9000',
          livereload: 35728
        }
      },

      coverage: {
        options: {
          port: 9001,
          hostname: '*',
          base: 'tests_out/coverage/html',
          open: 'http://localhost:9001',
          livereload: 35729
        }
      },

    },



    concurrent: {
      dev: {
        tasks: ['project', 'coverage', 'spec:unit'],
        options: {
          logConcurrentOutput: true
        }
      }
    }


  });

  //---

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-karma');
  grunt.loadNpmTasks('grunt-concurrent');
  grunt.loadNpmTasks('grunt-open');
  grunt.loadNpmTasks('grunt-newer');

  //---

  grunt.registerTask('default', ['clean:reports', 'newer:jshint']);

  //---

  grunt.registerTask('spec:ci', ['default', 'karma:ci']);

  grunt.registerTask('spec:coverage', ['default', 'karma:coverage', 'open:coverage']);

  grunt.registerTask('spec:unit', ['karma:unit:start', 'watch:unit']);

  //---

  grunt.registerTask('project', ['connect:project', 'watch:project']);
  grunt.registerTask('coverage', ['connect:coverage', 'watch:coverage']);


  //---

  grunt.registerTask('dev', ['default', 'karma:coverage', 'concurrent:dev']);


};
