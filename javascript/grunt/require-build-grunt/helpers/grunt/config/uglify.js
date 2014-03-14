module.exports = {

  dist: {
    files: {
      '<%= app.paths.dist %>/require.config.js': ['<%= app.paths.dist %>/require.config.js'] ,
     '<%= app.paths.dist %>/shared/fallback/ie.js': ['<%= app.paths.dist %>/shared/fallback/ie.js'] 
    }
  }

};