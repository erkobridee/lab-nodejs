module.exports = function(grunt) {
  'use strict';

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    jshint: {

      files: [
        'Gruntfile.js',
        'config/**/*.js',
        'tests/**/*.js'
      ]
    },

    protractor: {

      task_selenium_jar: {
        options: {
          configFile: '',
          args: {
            specs: [
              './tests/e2e/*.spec.js'
            ]
          }
        }
      },

      task_selenium_address: {
        options: {
          configFile: '',
          args: {
            seleniumAddress: 'http://localhost:4444/wd/hub',
            specs: [
              './tests/e2e/*.spec.js'
            ]
          }
        }
      },

      selenium_address: {
        options: {
          configFile: 'config/selenium-address.js'
        }
      },

      selenium_server_jar: {
        options: {
          configFile: 'config/selenium-server-jar.js'
        }
      },

      basic: {
        options: {
          configFile: 'config/basic.js'
        }
      },

      firefox: {
        options: {
          configFile: 'config/firefox.js'
        }
      },

      safari: {
        options: {
          configFile: 'config/safari.js'
        }
      },

      multiBrowser: {
        options: {
          configFile: 'config/multiBrowser.js'
        }
      },

    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-protractor-runner');

  grunt.registerTask('default', ['jshint']);

};
