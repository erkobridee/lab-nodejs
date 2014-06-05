module.exports = function(grunt) {

grunt.config('template', {

  dev: {
    files: {
      '<%= project.paths.output %>/index.html': '<%= project.paths.templates %>/index.html'
    },
    options: {
      data: {
        pageTitle: 'Grunt template test - DEV',
        enviroment: 'dev',
        test: 123,
        tags: ['DEV', 'template', 'gruntjs']
      }
    }
  },
  prod: {
    files: '<%= template.dev.files %>',
    options: {
      data: {
        pageTitle: 'Grunt template test - PROD',
        enviroment: 'prod',
        test: 321,
        tags: ['PROD', 'template', 'gruntjs']
      }
    }
  }

});

grunt.loadNpmTasks('grunt-template');

};
