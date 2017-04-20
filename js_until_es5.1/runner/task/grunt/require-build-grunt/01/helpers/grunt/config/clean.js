module.exports = function(grunt) {

grunt.config('clean', {

  build: ['<%= project.paths.build %>/'],

  dist: ['<%= project.paths.dist %>/']

});

};
