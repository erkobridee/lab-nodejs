module.exports = function(grunt) {

grunt.config('clean', {

  build: ['<%= project.paths.build %>/'],

  dist: ['<%= project.paths.dist %>/'],

  'distUnusedFiles': [
    '<%= project.paths.dist %>/build.txt',
    '<%= project.paths.dist %>/ng.app.js',
    '<%= project.paths.dist %>/require.build.config.js'
  ]

});

};
