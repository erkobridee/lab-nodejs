module.exports = {

  app: {
    files: [
      {
        expand: true, 
        cwd: '<%= app.paths.src %>/', 
        src: [
          '**', '!{,app/**/,shared/**/}*.js', '!**/*.less'
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
      }
    ]
  }

};
