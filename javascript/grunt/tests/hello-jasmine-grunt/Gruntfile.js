module.exports = function(grunt) {
  'use strict';

  var gruntConfig = {
    pkg: grunt.file.readJSON('package.json'),

    clean: {
      build: ['build/'],
      dotGrunt: ['.grunt/']
    },

    jshint: {
      all: [
        'Gruntfile.js',
        'src/**/*.js',
        'spec/**/*.js'
      ],
      options: {
        jshintrc: '.jshintrc'
      }
    },

    concat: {
      all: {
        src: ['src/ClassA.js', 'src/ClassB.js'],
        dest: 'build/app.js'
      }
    },

    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> : <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      dist: {
        src: 'build/app.js',
        dest: 'build/app.min.js'
      }
    },

    jasmine: {
      all: {
        src: 'build/**/*.min.js',
        options: {
          specs: 'spec/**/*.spec.js'
        }
      }
    }

  };

  grunt.initConfig(gruntConfig);

  // plugins
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-jasmine');

  grunt.registerTask('default', ['clean','jshint', 'concat', 'uglify', 'jasmine']);
};
