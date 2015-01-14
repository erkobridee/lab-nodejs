module.exports = function(grunt) {
  'use strict';

  var gruntConfig = {
    pkg: grunt.file.readJSON('package.json'),

    clean: {
      build: ['dist']
    },

    jshint: {
      all: ['*.js']
    },

    uglify: {
      options: {
        //banner: '/*! <%= pkg.name %>.min <%= grunt.template.today("yyyy-mm-dd") %> */\n'
        banner: '/*! <%= pkg.name %>.min */\n'
      },
      dist: {
        src: 'src/<%= pkg.jsMainName %>.js',
        dest: 'dist/<%= pkg.jsMainName %>.min.js'
      }
    }

  };

  grunt.initConfig(gruntConfig);

  // plugins
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('default', ['clean','jshint', 'uglify']);
};
