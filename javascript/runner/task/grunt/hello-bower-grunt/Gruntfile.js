module.exports = function(grunt) {
  'use strict';

  var appConfig = {
    serverPort: 1337,
    paths: {
      bower: 'components', // bower components dir
      app: 'src', // source
      build: 'build', // dev - mount
      dist: 'dist' // to production
    }
  };

  var gruntConfig = {

    paths: appConfig.paths,

    pkg: grunt.file.readJSON('package.json'),

    jshint: {
      all: [
        'Gruntfile.js'
      ]
    },

    clean: {
      working: [
        '<%= paths.build %>/'
      ]
    },

    copy: {
      jsLibs: {
        files: [
          { // jquery
            expand: true, 
            cwd: '<%= paths.bower %>/jquery/', 
            src: ['jquery.min.js'], 
            dest: '<%= paths.build %>/scripts/libs/', 
            filter: 'isFile'
          }
        ]
      },
      app: {
        files: [
          {
            expand: true, 
            cwd: '<%= paths.app %>/', 
            src: ['**'], 
            dest: '<%= paths.build %>/'
          }
        ]
      }
    },

    connect: {
      dev: {
        options: {
          port: appConfig.serverPort,
          base: './<%= paths.build %>/',
          keepalive: true
        }
      }
    },

    open: {
      dev: {
        path: 'http://localhost:<%= connect.dev.options.port %>/'
      }
    }

  };

  grunt.initConfig(gruntConfig);

  // plugins
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-open');

  grunt.registerTask('default', ['jshint', 'clean', 'copy', 'open', 'connect']); 

};