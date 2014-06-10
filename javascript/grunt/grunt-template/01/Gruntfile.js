module.exports = function(grunt) {
  'use strict';

  require('time-grunt')(grunt);
  require('jit-grunt')(grunt);

  // Initialize config
  grunt.initConfig({
    pkg: require('./package.json'),
  });

  // tasks config per file
  grunt.loadTasks('grunt_config');

  //--- grunt tasks

  grunt.registerTask('default', ['jshint', 'clean']);

  grunt.registerTask('dev', ['clean','jshint', 'template:dev']);

  grunt.registerTask('prod', ['clean','jshint', 'template:prod']);

};
