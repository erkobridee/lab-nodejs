module.exports = {

  dev: {
    options: {
       // These paths are searched for @imports
      paths: ['<%= app.paths.src %>']
    },
    files: {
      '<%= app.paths.src %>/styles/app.css': '<%= app.paths.src %>/styles/less/app.less'
    }
  },

  prod: {
    options: {
       // These paths are searched for @imports
      paths: ['<%= app.paths.src %>'],
      compress: true
    },
    files: {
      '<%= app.paths.dist %>/styles/app.css': '<%= app.paths.src %>/styles/less/app.less'
    }
  }
  
};