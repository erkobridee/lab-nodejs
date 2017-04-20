module.exports = function(grunt) {

grunt.config('connect', {

  dev: {
    options: {
      port: '<%= project.frontend.port %>',
      base: '<%= project.paths.src %>',
      hostname: '*',
      open: 'http://<%= project.frontend.host %>:<%= connect.dev.options.port %>',
      keepalive: true
    }
  },

  dist: {
    options: {
      port: '<%= project.frontend.port %>',
      base: '<%= project.paths.dist %>',
      hostname: '*',
      open: 'http://<%= project.frontend.host %>:<%= connect.dist.options.port %>',
      keepalive: true
    }
  }

});

};
