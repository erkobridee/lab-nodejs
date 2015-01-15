module.exports = function(gulp, $) {

  gulp.task('build:dev', function(cb) {
    $.runSequence(
      'clean',
      [
        'sass:dev',
        'jshint:project'
      ],
      cb
    );
  });

  gulp.task('build:prod', function(cb) {
    $.runSequence(
      'clean',
      'jshint:project',
      [
        'copy:html',
        'sass:prod',
        'uglify:js'
      ],
      cb
    );
  });

};
