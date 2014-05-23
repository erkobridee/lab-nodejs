module.exports = {

  options: {
    reporter: require('jshint-stylish')
  },

  grunt: [
    'Gruntfile.js'
  ],

  helpers: [
    'helpers/grunt/**/*.js'
  ],

  project: [
    '<%= project.paths.src %>/**/*.js'
  ]

};
