module.exports = function(gulp, $) {

  gulp.task('webserver:dev', ['build:dev'], function() {

    $.browserSync({
      port: $.config.webserver.port,
      server:{
        baseDir: [
          $.config.paths.src,
          $.config.paths.build
        ],
        middleware: $.config.webserver.middlewares
      }
    });

  });

  gulp.task('webserver:dist', ['build:prod'], function() {

    // https://www.npmjs.com/package/gulp-connect
    $.connect.server({
      port: $.config.webserver.port,
      root: [
        $.config.paths.outputDir
      ],
      middleware: function( connect, opts ) {
        return $.config.webserver.middlewares;
      }
    });
    $.open('http://' + $.localip + ':' + $.config.webserver.port);

  });

};
