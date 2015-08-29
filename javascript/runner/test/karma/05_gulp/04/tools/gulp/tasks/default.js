module.exports = function(gulp, $) {

  gulp.task('default', ['jshint', 'clean'], function() {
    $.projectInfoMsg();
  });

  // TODO: review

  gulp.task('project', function( done ) {
    $.runSequence(
      'default',
      'webserver',
      'watch',
      done
    );
  });

  gulp.task('coverage', function( done ) {
    $.runSequence(
      'default',
      'karma:coverage',
      done
    );
  });

  gulp.task('ci', function( done ) {
    $.runSequence(
      'default',
      'karma:ci',
      done
    );
  });

  gulp.task('specs', function( done ) {
    $.runSequence(
      'default',
      'karma:unit',
      'watch',
      done
    );
  });

  gulp.task('dev', function( done ) {
    $.runSequence(
      'default',
      [
        'webserver',
        'karma:unit'
      ],
      'watch',
      done
    );
  });

};
