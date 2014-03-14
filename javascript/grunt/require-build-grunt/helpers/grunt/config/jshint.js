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

  app: [
    '!<%= app.paths.src %>/vendor/**/*.js',
    '!<%= app.paths.src %>/{,shared/,app/}*.min.js',
    '<%= app.paths.src %>/{,shared/,app/}*.js'
  ]

}; 