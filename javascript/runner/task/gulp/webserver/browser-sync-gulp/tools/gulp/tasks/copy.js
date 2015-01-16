module.exports = function(gulp, $) {

  gulp.task('copy:html', function() {
    return gulp.src(
      $.config.paths.src + '/**/*.html'
    )
    .pipe( gulp.dest( $.config.paths.outputDir ) );
  });

};
