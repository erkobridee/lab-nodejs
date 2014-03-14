module.exports = {

  dist: {
    options: {
      optimizationLevel: 3
    },
    files: [
      {
        expand: true,
        cwd: '<%= app.paths.dist %>/',
        src: ['**/*.{png,jpg,jpeg,gif}'],
        dest: '<%= app.paths.dist %>/',
      }
    ]
  }

};