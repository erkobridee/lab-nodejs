module.exports = function(grunt) {
  'use strict';

  var gruntConfig = {
    pkg: grunt.file.readJSON('package.json'),

    clean: {
      build: ['css']
    },

    less: {
      development: {
        options: {
           // These paths are searched for @imports
          paths: ["less"]
        },
        files: {
          "css/result.css": "less/main.less"
        }
      },
      production: {
        options: {
           // These paths are searched for @imports
          paths: ["less"],
          yuicompress: true
        },
        files: {
          "css/result.min.css": "less/main.less"
        }
      }
    }

  };

  grunt.initConfig(gruntConfig);

  // plugins
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-less');

  grunt.registerTask('default', ['clean', 'less:development']);
  grunt.registerTask('prod', ['clean', 'less:production']);
};