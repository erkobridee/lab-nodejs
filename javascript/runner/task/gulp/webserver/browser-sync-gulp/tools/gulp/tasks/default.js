module.exports = function(gulp, $) {

  gulp.task('dev', ['watch:dev']);
  gulp.task('dist', ['browserSync:dist']);

  //---

  gulp.task('help', $.taskListing);

  //---

  gulp.task('default', function(cb) {

    $.projectInfoMsg();

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
