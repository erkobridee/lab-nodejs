module.exports = function(grunt) {

grunt.config('clean', {

  build: ['<%= project.paths.output %>/']

});

grunt.loadNpmTasks('grunt-contrib-clean');

};
