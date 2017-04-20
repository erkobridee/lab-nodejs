module.exports = function(gulp, $) {

  // wf - watch flow

    // bs - browser sync
  gulp.task('wf:bs:reload', function() {
    if( $.browserSync.active ) $.reload();
  });

  gulp.task('wf', function( done ) {
    $.runSequence(
      'jshint',
      [
        'wf:bs:reload',
        'karma:unit:run'
      ],
      done
    );
  });

  gulp.task('watch', function() {
    gulp.watch(['{src,tests}/**/*.js'], ['wf']);
  });

};
