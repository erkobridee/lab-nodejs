module.exports = function(grunt) {
  'use strict';

  var gruntConfig = {
    paths: {
      app: 'app',
      build: 'dist'
    },

    pkg: grunt.file.readJSON('package.json'),

    clean: {
      build: ['<%= paths.build %>/']
    },

    jshint: {
      all: [
        'Gruntfile.js',
        '<%= paths.app %>/**/*.js'
      ]
    },

    template: {
      dev: {
        files: {
          '<%= paths.build %>/index.html': '<%= paths.app %>/index.html'
        },
        options: {
          data: {
            pageTitle: 'Grunt template test - DEV',
            enviroment: 'dev',
            test: 123,
            tags: ['DEV', 'template', 'gruntjs']
          }
        }
      },
      prod: {
        files: '<%= template.dev.files %>',
        options: {
          data: {
            pageTitle: 'Grunt template test - PROD',
            enviroment: 'prod',
            test: 321,
            tags: ['PROD', 'template', 'gruntjs']
          }
        }
      }
    }

  };

  grunt.initConfig(gruntConfig);

  // plugins
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-template');

  // tasks
  grunt.registerTask('default', ['jshint']);

  grunt.registerTask('dev', ['clean','jshint', 'template:dev']); 

  grunt.registerTask('prod', ['clean','jshint', 'template:prod']); 

};