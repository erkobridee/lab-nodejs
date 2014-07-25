module.exports = function(grunt) {
  'use strict';

  require('time-grunt')(grunt);
  require('jit-grunt')(grunt)({
    customTasksDir: 'grunt/tasks'
  });

  // Initialize config
  grunt.initConfig({
    pkg: require('./package.json'),
  });

  // tasks config per file
  grunt.loadTasks('grunt/config');

  //--- grunt tasks

  grunt.registerTask('default', ['clean', 'jshint']);

  // grunt generate task defined
  // run command 'grunt generate'

};
