module.exports = function(grunt) {

grunt.config('jshint', {

  all: [
    'Gruntfile.js',
    'grunt_config/**/*.js',
    '<%= project.paths.templates %>/**/*.js'
  ]

});

};
