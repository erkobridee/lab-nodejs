module.exports = function(grunt) {
  'use strict';

  require('time-grunt')(grunt);

  // Initialize config.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json')
  });

  // tasks config per file
  grunt.loadTasks('helpers/grunt/config');

  // custom tasks
  grunt.loadTasks('helpers/grunt/tasks'); // grunt helloworld


  //--- grunt tasks

  grunt.registerTask('custom', function(target) {

    grunt.log.writeln('custom target: ' + target);

  });

  grunt.registerTask('dynamic', function() {

    var obj = {
      name: this.name,
      args: this.args
    };

    grunt.log.writeln('dynamic:' + JSON.stringify(obj, null, 2));

  });

  // redefine default task to run
  grunt.registerTask('default', ['jshint', 'helloworld']);

};
