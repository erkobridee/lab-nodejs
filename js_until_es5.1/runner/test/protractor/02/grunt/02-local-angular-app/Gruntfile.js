module.exports = function(grunt) {
  'use strict';

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    jshint: {
      files: [
        'Gruntfile.js',
        'config/**/*.js',
        'src/**/*.js',
        '!src/bower_components/**/*.js',
        'tests/**/*.js'
      ]
    },

    connect: {
      options: {
        port: 1337,
        base: './src',
        hostname: '*'
      },
      basic: {
        options: {
          keepalive: false
        }
      },
      server: {
        options: {
          open: 'http://localhost:<%= connect.options.port %>',
          keepalive: true
        }
      }
    },

    protractor: {
      basic: {
        options: {
          configFile: 'config/basic.js',
          args: {
            baseUrl: '<%= connect.server.options.open %>',
          }
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-protractor-runner');

  grunt.registerTask('default', ['jshint']);

  grunt.registerTask('e2e', ['jshint', 'connect:basic', 'protractor:basic']);

};
