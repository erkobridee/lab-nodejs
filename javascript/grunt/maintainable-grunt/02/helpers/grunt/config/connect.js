module.exports = function(grunt) {

  grunt.config('connect', {

    dev: {
      options: {
        port: 1337,
        base: '<%= app.path %>',
        keepalive: true
      }
    }

  });

  //grunt.loadNpmTasks('grunt-contrib-connect');

};
