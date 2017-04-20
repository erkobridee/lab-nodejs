module.exports = {

  dev: {
    options: {
       // These paths are searched for @imports
      paths: ['<%= project.paths.src %>']
    },
    files: {
      '<%= project.paths.src %>/assets/css/site.css': '<%= project.paths.src %>/less/site.less'
    }
  },

  prod: {
    options: {
       // These paths are searched for @imports
      paths: '<%= less.dev.options.paths %>',
      compress: true
    },
    files: '<%= less.dev.files %>'
  }

};
