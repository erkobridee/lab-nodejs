module.exports = function(grunt) {
  'use strict';

  var gruntConfig = {
    pkg: grunt.file.readJSON('package.json'),

    clean: {
      working: [
        'build/',
        'dist/'
      ],
      build: ['build/']
    },

    jshint: {
      all: [
        'Gruntfile.js'
      ]
    },

    template: {
      dev: {
        files: {'./build/': './app/**/*.html'},
        environment: 'dev'
      },
      prod: {
        files: '<%= template.dev.files %>',
        environment: 'prod'
      }
    },

    minifyHtml: {
      prod: {
        files: {
          './dist/': './build/**/*.html'
        }
      }
    }

  };

  grunt.initConfig(gruntConfig);

  // plugins
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-hustler');

  grunt.registerTask('default', ['jshint']);

  grunt.registerTask('dev', ['clean:working','jshint', 'template:dev']);

  grunt.registerTask('prod', ['clean:working','jshint', 'template:prod', 'minifyHtml', 'clean:build']);


};