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

    htmlbuild: {
      dev: {
        src: '<%= paths.app %>/index.html',
        dest: '<%= paths.build %>/',
        options: {
          beautify: true,
          scripts: {
              bundle: [
                  '<%= paths.app %>/scripts/*.js',
                  '!**/*Main.js', 
                  '!**/*.min.js'
              ],
              main: '<%= paths.app %>/scripts/devMain.js'
          },
          styles: {
              bundle: [
                  '<%= paths.app %>/css/libs.css',
                  '<%= paths.app %>/css/dev.css'
              ],
              test: '<%= paths.app %>/css/inline.css'
          },
          sections: {
              views: '<%= paths.app %>/views/**/*.html',
              templates: '<%= paths.app %>/templates/**/*.html'
          },
          data: {
              // Data to pass to templates
              version: "0.1.0",
              title: "dev",
          }
        }
      },
      prod: {
        src: '<%= paths.app %>/index.html',
        dest: '<%= paths.build %>/',
        options: {
          beautify: true,
          scripts: {
              bundle: [
                  '<%= paths.app %>/scripts/*.min.js'
              ],
              main: '<%= paths.app %>/scripts/prodMain.js'
          },
          styles: {
              bundle: [
                  '<%= paths.app %>/css/app.min.css'
              ],
              test: '<%= paths.app %>/css/inline.css'
          },
          sections: {
              views: '<%= paths.app %>/views/**/*.html',
              templates: '<%= paths.app %>/templates/**/*.html'
          },
          data: {
              // Data to pass to templates
              version: "0.1.0",
              title: "prod",
          }
        }
      }
    }

  };

  grunt.initConfig(gruntConfig);

  // plugins
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-html-build');

  // tasks
  grunt.registerTask('default', ['jshint']);

  grunt.registerTask('dev', ['clean','jshint', 'htmlbuild:dev']); 

  grunt.registerTask('prod', ['clean','jshint', 'htmlbuild:prod']); 

};