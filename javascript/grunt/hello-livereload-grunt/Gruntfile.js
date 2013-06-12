/*global module:false*/
var path = require('path');
var lrSnippet = require('grunt-contrib-livereload/lib/utils').livereloadSnippet;
 
var folderMount = function folderMount(connect, point) {
  return connect.static(path.resolve(point));
};

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
          middleware: function(connect, options) {
            return [lrSnippet, folderMount(connect, './<%= paths.app %>/')];
          }
        }
      }
    }
  };

  grunt.initConfig(gruntConfig);

  // plugins
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-livereload');

  grunt.registerTask('default', ['jshint', 'connect', 'watch']);

};