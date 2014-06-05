module.exports = function(grunt) {
  'use strict';

  var gruntConfig = {
    project: {
      paths: {
        templates: 'templates',
        output: 'dist'
      }
    },

    pkg: grunt.file.readJSON('package.json'),

    clean: {
      build: ['<%= project.paths.output %>/']
    },

    jshint: {
      all: [
        'Gruntfile.js',
        '<%= project.paths.templates %>/**/*.js'
      ]
    },

    template: {
      dev: {
        files: {
          '<%= project.paths.output %>/index.html': '<%= project.paths.templates %>/index.html'
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
  grunt.registerTask('default', ['jshint', 'clean']);

  grunt.registerTask('dev', ['clean','jshint', 'template:dev']);

  grunt.registerTask('prod', ['clean','jshint', 'template:prod']);

};
