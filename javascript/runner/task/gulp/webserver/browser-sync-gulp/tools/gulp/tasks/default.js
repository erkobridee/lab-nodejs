module.exports = function(gulp, $) {

  gulp.task('dev', ['watch:dev']);
  gulp.task('dist', ['browserSync:dist']);

  //---

  gulp.task('help', $.taskListing);

  //---

  gulp.task('default', function(done) {

    $.projectInfoMsg();

    if( $.is.release ) {

      if( $.is.preview ) {

        $.runSequence('dist', done);

      } else {

        $.runSequence('build:prod', done);

      }

    } else {

      $.runSequence('dev', done);

    }

  });

};
