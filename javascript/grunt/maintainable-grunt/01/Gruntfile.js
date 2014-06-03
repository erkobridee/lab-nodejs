module.exports = function(grunt) {
  'use strict';

  require('load-grunt-config')(grunt, {configPath: 'helpers/grunt/config'});

  // custom tasks
  grunt.loadTasks('helpers/grunt/tasks'); // grunt helloWorld


  //--- grunt tasks

  grunt.registerTask('default', ['jshint', 'helloWorld']); 

  grunt.registerTask('server', ['open', 'connect:dev']); 

  grunt.registerTask('dev', ['jshint', 'server']);

};