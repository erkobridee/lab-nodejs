module.exports = function(grunt) {

var config = require('../../../config')();

grunt.config('project', {

  paths: config.paths,

  require: {
    name: 'ng.app',
    config: '<%= project.paths.src %>/require.config.js',
    build: '<%= project.paths.build %>/require.build.config.js'
  }

});

};
