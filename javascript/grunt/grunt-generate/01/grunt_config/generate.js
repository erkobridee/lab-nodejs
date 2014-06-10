module.exports = function(grunt) {

grunt.config('generate', {

  options: {
    src: '<%= project.paths.templates %>',
    dest: '<%= project.paths.output %>'
  }

});

};
