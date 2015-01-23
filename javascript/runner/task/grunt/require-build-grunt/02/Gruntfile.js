module.exports = function(grunt) {
  'use strict';

  require('time-grunt')(grunt);
  require('jit-grunt')(grunt)({
    customTasksDir: 'helpers/grunt/tasks'
  });

  // Initialize config
  grunt.initConfig({
    pkg: require('./package.json')
  });

  // load tasks config per file
  grunt.loadTasks('helpers/grunt/config');

  //grunt.task.run('helloworld');

  //--- @begin: grunt tasks

  // TODO: review
  grunt.registerTask('temp', ['configrequire', 'helloworld']);


  grunt.registerTask('default', ['jshint']);

  grunt.registerTask('cleanup', ['clean:dist', 'clean:build']);

  grunt.registerTask('build', [
    'cleanup',
    'jshint',
    'copy:jstobuild',
    // 'html2js:prod',
    'templatesCache',
    'rewriterequireconfig',
    'configrequire',
    'requirejs',
    'clean:build',
    'copy:todist',
    'cleanempty',
    'less:prod',
    'htmlmin',
    'imagemin',
    'uglify'
  ]);

  grunt.registerTask('server', function(target) {
    if (target === 'dist') {
      return grunt.task.run([
        'build',
        'connect:dist'
      ]);
    }

    // dev
    return grunt.task.run([
      'connect:dev'
    ]);
  });


  //--- @end: grunt tasks

};
