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

    imagemin: {
      options: {                       
        optimizationLevel: 3
      },
      files: {
          expand: true,      
          cwd: 'app/',       
          src: ['**/*.png', '**/*.jpg', '**/*.jpeg', '**/*.gif'],   
          dest: 'dist/',    
      }
    }

  };

  grunt.initConfig(gruntConfig);

  // plugins
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-imagemin');

  grunt.registerTask('default', ['clean','jshint', 'imagemin']);
};