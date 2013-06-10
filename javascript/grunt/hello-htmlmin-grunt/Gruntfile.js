module.exports = function(grunt) {
  'use strict';

  var gruntConfig = {
    pkg: grunt.file.readJSON('package.json'),

    clean: {
      build: ['dist/']
    },

    jshint: {
      all: [
        'Gruntfile.js',
        'app/**/*.js'
      ]
    },

    htmlmin: {
      dist: {                                       
        options: {                                  
          removeComments: true,
          collapseWhitespace: true
        },
        files: [{
            expand: true,      
            cwd: 'app/',       
            src: '*.html',  
            dest: 'dist/',    
        }],
      }
    }

  };

  grunt.initConfig(gruntConfig);

  // plugins
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');

  grunt.registerTask('default', ['clean','jshint', 'htmlmin']);
};