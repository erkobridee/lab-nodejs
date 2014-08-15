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

      specs: {
        configFile: 'configs/karma.conf.js'
      },

      singleRun: {
        configFile: 'configs/karma.conf.js',
        browsers: ['PhantomJS'],
        singleRun: true
      },

      unit: {
        configFile: 'configs/karma.conf.js',
        browsers: ['Chrome'],
        autoWatch: false,
        background: true
      },

      coverage: {
        configFile: 'configs/karma.conf.js',
        reporters: ['progress', 'coverage'],
        browsers: ['PhantomJS'],
        singleRun: true,
        coverageReporter: {
          type : 'html',
          dir : 'tests_out/coverage/',
          subdir: 'html'
        }
      },

      ci: {
        configFile: 'configs/karma.conf.js',
        reporters: ['junit', 'coverage'],
        browsers: ['PhantomJS'],
        singleRun: true,
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
  grunt.loadNpmTasks('grunt-newer');

  //---

  grunt.registerTask('default', ['clean:reports', 'newer:jshint']);

  //---

  grunt.registerTask('spec:coverage', ['default', 'karma:coverage']);
  grunt.registerTask('spec:ci', ['default', 'karma:ci']);

  grunt.registerTask('spec:unit', ['karma:unit:start', 'watch:unit']);

  //---

  grunt.registerTask('project', ['connect:project', 'watch:project']);
  grunt.registerTask('coverage', ['connect:coverage', 'watch:coverage']);


  //---

  grunt.registerTask('dev', ['default', 'karma:singleRun', 'concurrent:dev']);


};
