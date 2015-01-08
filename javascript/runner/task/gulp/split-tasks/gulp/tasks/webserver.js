module.exports = function(gulp, $) {

  gulp.task('webserver', function() {

    var serverConfig = {
      livereload: $.config.livereload,
      port: $.config.port,
      directoryListing: true,
      host: '0.0.0.0'
    };

    return gulp.src('.')
      .pipe($.webserver(serverConfig));

  });

};
