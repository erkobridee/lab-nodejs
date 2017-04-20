module.exports = {

  // https://github.com/shakyShane/browser-sync/wiki/options

  default_option: {

    bsFiles: {
      src: [
        '**/assets/css/*.css',
        '**/assets/js/**/*.js',
        '**/*.html'
      ]
    },

    options: {

      server: {
        baseDir: '<%= project.paths.src %>',
        directory: true
      }

    }

  }

};
