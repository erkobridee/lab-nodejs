module.exports = function(grunt) {
  'use strict';

  require('time-grunt')(grunt);
  require('jit-grunt')(grunt)({
    customTasksDir: 'helpers/grunt/tasks'
  });

  // Initialize config.
  grunt.initConfig({
    pkg: require('./package.json'),
  });

  // tasks config per file
  grunt.loadTasks('helpers/grunt/config');

  //--- grunt tasks

  grunt.registerTask('default', ['jshint', 'helloworld']);

  grunt.registerTask('server', ['open', 'connect:dev']);

  grunt.registerTask('dev', ['jshint', 'server']);

};
