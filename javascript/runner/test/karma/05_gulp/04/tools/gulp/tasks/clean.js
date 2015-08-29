module.exports = function(gulp, $) {

  gulp.task('clean:reports', $.del.bind(null, [
    $.config.paths.reports
  ]));

  gulp.task('clean', ['clean:reports']);

};
