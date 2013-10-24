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
          base: './<%= paths.app %>/',
          //hostname: "localhost",
          livereload: true,
          open: true
        }
      }
    }
  };

  grunt.initConfig(gruntConfig);

  // plugins
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');

  grunt.registerTask('default', ['jshint', 'connect', 'watch']); 

};