module.exports = function(grunt) {
  'use strict';

  require('time-grunt')(grunt);

  // Initialize config.
  grunt.initConfig({
    pkg: require('./package.json'),
  });

  // tasks config per file
  grunt.loadTasks('helpers/grunt/config');

  // custom tasks
  grunt.loadTasks('helpers/grunt/tasks'); // grunt helloworld


  //--- grunt tasks

  grunt.registerTask('default', ['jshint', 'helloWorld']);

  grunt.registerTask('server', ['open', 'connect:dev']);

  grunt.registerTask('dev', ['jshint', 'server']);

};
