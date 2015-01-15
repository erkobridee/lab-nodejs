module.exports = function(gulp, $) {

  gulp.task('uglify:js', function() {
    return gulp.src(
        $.config.paths.src + '/scripts/main.js'
      )
      .pipe( $.uglify() )
      .pipe( gulp.dest( $.path.join( $.config.paths.outputDir, 'scripts' ) ) );
  });

};
