module.exports = function(gulp, $) {

  gulp.task('clean:dist', function(cb) {
    $.del([
      $.config.paths.dist
    ], cb);
  });


  gulp.task('clean', ['clean:dist']);

};
