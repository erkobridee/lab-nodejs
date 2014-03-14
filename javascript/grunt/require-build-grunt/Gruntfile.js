module.exports = function(grunt) {
  'use strict';

  grunt.log.writeln('\nloading grunt plugins and configs...');
  require('load-grunt-config')(grunt, {configPath: __dirname+'/helpers/grunt/config'});
  grunt.log.writeln('...done\n');

  // load custom tasks
  grunt.loadTasks('helpers/grunt/tasks'); // grunt helloworld
  //grunt.task.run('helloworld');
  
  //--- @begin: grunt tasks

  grunt.registerTask('default', ['jshint']); 

  grunt.registerTask('cleanup', ['clean:dist', 'clean:build']); 

  grunt.registerTask('build', [ 
    'cleanup',
    'jshint',
    'copy:jstobuild',
    'html2js:prod',
    'requirejs',
    'clean:build',
    'copy:todist',
    'cleanempty',
    'less:prod',
    'htmlmin',
    'imagemin'
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
