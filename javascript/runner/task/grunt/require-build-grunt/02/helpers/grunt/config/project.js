module.exports = function(grunt) {

var config = require('../../../config')();

grunt.config('project', {

  paths: config.paths,

  frontend: {
    host: config.frontend.webhost,
    port: config.frontend.webserver
  },

  require: {
    name: 'ng.app',
    config: '<%= project.paths.src %>/require.config.js',
    build: '<%= project.paths.build %>/require.build.config.js',

    findModules: config.frontend.requirejs.findModules
  }

});

};
