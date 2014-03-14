module.exports = {

  dist: {
    options: {
      removeComments: true,
      collapseWhitespace: true
    },
    files: [{
      expand: true,
      cwd: '<%= app.paths.dist %>/',
      src: 'index.html',
      dest: '<%= app.paths.dist %>/',
    }],
  }

};