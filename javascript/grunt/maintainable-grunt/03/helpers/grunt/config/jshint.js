module.exports = function(grunt) {

  grunt.config('jshint', {

    all: [
      'Gruntfile.js',
      'helpers/grunt/**/*.js',
      '<%= app.path %>/**/*.js'
    ]

  });

  grunt.loadNpmTasks('grunt-contrib-jshint');

};
