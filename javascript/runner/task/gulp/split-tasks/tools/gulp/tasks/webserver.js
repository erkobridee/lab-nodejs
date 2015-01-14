module.exports = function(gulp, $) {

  gulp.task('webserver', function() {

    var serverConfig = {
      livereload: $.config.webserver.livereload,
      port: $.config.webserver.port,
      directoryListing: $.config.webserver.directoryListing,
      host: '0.0.0.0',
      open: $.config.webserver.open
    };

    return gulp.src( '.' )
      .pipe( $.webserver( serverConfig ) );

  });

};
