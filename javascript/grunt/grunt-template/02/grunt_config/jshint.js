module.exports = function(grunt) {

grunt.config('jshint', {

  all: [
    'Gruntfile.js',
    'grunt/**/*.js',
    '<%= project.paths.templates %>/**/*.js'
  ]

});

};
