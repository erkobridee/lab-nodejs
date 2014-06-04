module.exports = function(grunt) {
  'use strict';

  require('time-grunt')(grunt);

  // Initialize config.
  grunt.initConfig({
    pkg: require('./package.json'),
  });

  // load grunt configs and custom tasks
  require('./helpers/grunt/load')(grunt);


  //--- grunt tasks

  grunt.registerTask('default', ['jshint', 'helloworld']);

  grunt.registerTask('server', ['open', 'connect:dev']);

  grunt.registerTask('dev', ['jshint', 'server']);

};
