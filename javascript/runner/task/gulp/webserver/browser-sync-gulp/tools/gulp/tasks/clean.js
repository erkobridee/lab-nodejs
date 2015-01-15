module.exports = function(gulp, $) {

  gulp.task('clean:build', function(cb) {
    $.del([
      $.config.paths.build
    ], cb);
  });

  gulp.task('clean:dist', function(cb) {
    $.del([
      $.config.paths.dist
    ], cb);
  });

  gulp.task('clean', ['clean:build', 'clean:dist']);

};
