module.exports = function(gulp, $) {

  gulp.task('copy:html', function() {
    return gulp.src( $.config.htmls )
    .pipe( gulp.dest( $.config.paths.outputDir ) );
  });

};
