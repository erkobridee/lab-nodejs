module.exports = function(gulp, $) {

  gulp.task('copy:htmls', function() {
    return gulp.src( $.config.html.project )
    .pipe( gulp.dest( $.config.paths.outputDir ) );
  });

};
