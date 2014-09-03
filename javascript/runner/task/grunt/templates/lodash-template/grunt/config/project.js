module.exports = function(grunt) {

grunt.config('project', {

  paths: {
    templates: 'templates',
    output: 'dist'
  },

  backend: {
    context: '/apirest'
  }

});

};
