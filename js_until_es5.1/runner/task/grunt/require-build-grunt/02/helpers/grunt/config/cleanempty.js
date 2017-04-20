module.exports = function(grunt) {

grunt.config('cleanempty', {

  dist: {
    src: ['<%= project.paths.dist %>/**/*']
  }

});

};
