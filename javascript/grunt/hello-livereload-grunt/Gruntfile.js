module.exports = function(grunt) {
  'use strict';

  var gruntConfig = {

    paths: {
      app: 'app', // source
      build: 'build', // dev - mount
      dist: 'dist' // to production
    },

    pkg: grunt.file.readJSON('package.json'),

    jshint: {
      all: [
        'Gruntfile.js'
      ]
    },

    watch: {
      files : [
        '<%= paths.app %>/index.html',
        '<%= paths.app %>/app.css'
      ],
      options: {
        livereload: true
      }
    },

    connect: {
      dev: {
        options: {
          port: 1337,
          basePoint: './<%= paths.app %>/',
          middleware: require('./LivereloadMiddleware') 
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
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-livereload');
  grunt.loadNpmTasks('grunt-open');

  grunt.registerTask('default', ['jshint', 'connect', 'open', 'watch']); 

};