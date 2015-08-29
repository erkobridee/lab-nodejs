module.exports = function(gulp, $) {

  gulp.task('webserver', function() {

    $.browserSync({
      port: $.config.webserver.port,
      server:{
        // directory: true,
        baseDir: [
          $.config.paths.src
        ]
      }
    });

  });

};
