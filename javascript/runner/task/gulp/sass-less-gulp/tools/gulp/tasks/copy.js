module.exports = function(gulp, $) {

  gulp.task('copy:fonts', ['clean'], function() {

    return gulp
      .src(
        $.path.join(
          $.config.paths.src.fonts,
          $.config.paths.fontsfilename
        ) + '.*'
      )
      .pipe( gulp.dest( $.path.join( $.config.paths.outputDir, 'fonts' ) ) );

  });

  gulp.task('copy', ['copy:fonts']);

};
