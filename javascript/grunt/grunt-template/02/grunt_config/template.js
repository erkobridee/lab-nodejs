module.exports = function(grunt) {

grunt.config('template', {

  target: {
    files: {
      '<%= project.paths.output %>/crud/template.html': '<%= project.paths.templates %>/crud/template.html',
      '<%= project.paths.output %>/crud/logic.js': '<%= project.paths.templates %>/crud/logic.js'
    },
    options: {
      data: {
        crudName: 'CRUD Sample'
      }
    }
  }

});

};
