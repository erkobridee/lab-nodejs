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

      unitSingleRun: {
        configFile: 'configs/karma.dev.conf.js',
        browsers: ['PhantomJS'],
        singleRun: true
      },

      unit: {
        configFile: 'configs/karma.dev.conf.js',
        background: true
      },

      coverage: {
        configFile: 'configs/karma.coverage.conf.js'
      },

      ci: {
        configFile: 'configs/karma.ci.conf.js'
      }

    },


    watch: {

      project: {
        files: ['src/**/*', '!src/bower_components/**/*'],
        tasks: ['newer:jshint:project'],
        options: {
          livereload: true
        }
      },

      spec: {
        files: ['src/**/*.js', 'tests/**/*.js'],
        tasks: ['newer:jshint:project', 'karma:unit:run'],
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

      livereload: {
        options: {
          port: 9000,
          hostname: '*',
          base: 'src',
          open: 'http://localhost:9000',
          livereload: true
        }
      },

    },

    concurrent: {
      dev: {
        tasks: ['project', 'spec:unit'],
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

  grunt.registerTask('spec:unit', ['karma:unitSingleRun', 'karma:unit:start', 'watch:spec']);

  grunt.registerTask('project', ['connect:livereload', 'watch:project']);

  //---

  grunt.registerTask('dev', ['default', 'concurrent:dev']);


};
