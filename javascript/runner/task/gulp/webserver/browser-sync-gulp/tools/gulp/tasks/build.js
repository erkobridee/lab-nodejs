module.exports = function(gulp, $) {

  gulp.task('build:dev', function(done) {
    $.runSequence(
      'clean',
      [
        'sass:dev',
        'jshint:project'
      ],
      done
    );
  });

  gulp.task('build:prod', function(done) {
    $.runSequence(
      'clean',
      'jshint:project',
      [
        'copy:html',
        'sass:prod',
        'uglify:js'
      ],
      done
    );
  });

};
