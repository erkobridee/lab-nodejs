module.exports = function(grunt) {
  'use strict';

  require('time-grunt')(grunt);

  require('load-grunt-config')(
    grunt, {
      configPath: 'helpers/grunt/config'
    }
  );

  // custom tasks
  grunt.loadTasks('helpers/grunt/tasks'); // grunt helloworld


  //--- grunt tasks

  grunt.registerTask('default', ['jshint', 'helloworld']);

  grunt.registerTask('server', ['open', 'connect:dev']);

  grunt.registerTask('dev', ['jshint', 'server']);

};
