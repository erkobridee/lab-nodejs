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

    watch: {
      files : [
        'app/**/*.js',
        'Gruntfile.js'
      ],
      tasks : ['jshint']
    }

  };

  grunt.initConfig(gruntConfig);

  // plugins
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['jshint']);

  grunt.registerTask('w', ['watch']);

};