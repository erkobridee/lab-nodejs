module.exports = {

  jstobuild: {
    files: [
      {
        expand: true, 
        cwd: '<%= app.paths.src %>/', 
        src: [
          '**/*.js', '!require.config.js'
        ], 
        dest: '<%= app.paths.build %>/'
      }
    ]
  },

  todist: {
    files: [
      {
        expand: true, 
        cwd: '<%= app.paths.src %>/', 
        src: [
          '**', '!{,app/**/,shared/**/}*.js', '!**/*.{less,html}', '!styles/**/*.*'
        ], 
        dest: '<%= app.paths.dist %>/'
      },
      {
        expand: true,
        cwd: '<%= app.paths.src %>/', 
        src: [
          'shared/fallback/ie.js'
        ], 
        dest: '<%= app.paths.dist %>/'
      },
      {
        expand: true,
        cwd: '<%= app.paths.src %>/', 
        src: [
          'require.config.js'
        ], 
        dest: '<%= app.paths.dist %>/'
      },
      {
        expand: true,
        cwd: '<%= app.paths.src %>/', 
        src: [
          'index.html'
        ], 
        dest: '<%= app.paths.dist %>/'
      }
    ]
  }

};
