module.exports = function(gulp, $) {

  gulp.task('copy:fonts', ['clean'], function() {

    return gulp
      .src( $.config.fonts )
      .pipe( gulp.dest( $.path.join( $.config.paths.outputDir, 'fonts' ) ) );

  });

  gulp.task('copy', ['copy:fonts']);

};
