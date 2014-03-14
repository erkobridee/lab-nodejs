module.exports = {

  options: {
    module: 'templatesCache',
    fileHeaderString: 'define([\'angular\'], function(angular) { \n',
    fileFooterString: '\n});'
  },

  dev: {
    src: [
      '<%= app.paths.src %>/app/**/*.html',
      '<%= app.paths.src %>/shared/**/*.html'
    ],
    dest: '<%= app.paths.build %>/app/main/templates/cache.js'
  },

  prod: {
    options: {
      htmlmin: {
        collapseBooleanAttributes: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true,
        removeComments: true,
        removeEmptyAttributes: true,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true
      }
    },
    src: '<%= html2js.dev.src %>',
    dest: '<%= html2js.dev.dest %>'
  }

};