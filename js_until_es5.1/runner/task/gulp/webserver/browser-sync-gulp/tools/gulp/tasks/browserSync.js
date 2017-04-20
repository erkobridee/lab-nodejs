module.exports = function(gulp, $) {

  gulp.task('browserSync:dev', ['build:dev'], function() {

    $.browserSync({
      port: $.config.webserver.port,
      server:[
        $.config.paths.src,
        $.config.paths.build
      ]
    });

  });

  gulp.task('browserSync:dist', ['build:prod'], function() {

    $.browserSync({
      port: $.config.webserver.port,
      server:[
        $.config.paths.outputDir
      ]
    });

  });

};
