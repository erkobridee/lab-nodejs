module.exports = function(gulp, $) {

  gulp.task('dev', ['watch:dev']);
  gulp.task('dist', ['browserSync:dist']);


  // gulp.task('default', ['dev']); // alias to dev task

  gulp.task('default', function(cb) {

    if( $.is.release ) {

      if( $.is.preview ) {

        $.runSequence('dist', cb);

      } else {

        $.runSequence('build:prod', cb);

      }

    } else {

      $.runSequence('dev', cb);

    }

  });

};
