module.exports = function(gulp, $) {

  gulp.task('dev', ['watch:dev']);
  gulp.task('dist', ['browserSync:dist']);

  //---

  gulp.task('flow:default', function(done) {

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

  //---

  gulp.task('default', ['flow:default'], function() {

    $.projectInfoMsg();

  });

};
