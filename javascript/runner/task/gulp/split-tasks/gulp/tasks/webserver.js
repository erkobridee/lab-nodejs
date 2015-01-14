module.exports = function(gulp, $) {

  gulp.task('webserver', function() {

    console.log( $.config.webserver );

    var serverConfig = {
      livereload: $.config.webserver.livereload,
      port: $.config.webserver.port,
      directoryListing: $.config.webserver.directoryListing,
      host: '0.0.0.0',
      open: 'http://localhost:' + $.config.webserver.port
    };

    return gulp.src('.')
      .pipe($.webserver(serverConfig));

  });

};
