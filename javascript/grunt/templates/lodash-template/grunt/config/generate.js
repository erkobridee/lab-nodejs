module.exports = function(grunt) {

grunt.config('generate', {

  options: {
    templatesDir: '<%= project.paths.templates %>',
    outputDir: '<%= project.paths.output %>'
  }

});

};
