module.exports = {

  js: {
    files: [
      '<%= project.paths.src %>/**/*.js'
    ],
    tasks : [ 'jshint:project' ]
  },

  less: {
    files: [
      '<%= project.paths.src %>/**/*.less'
    ],
    tasks : [ 'less:dev' ]
  }

};
