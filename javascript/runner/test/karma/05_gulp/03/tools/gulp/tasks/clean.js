module.exports = function(gulp, $) {

  gulp.task('clean:bower', $.del.bind(null, [
    $.config.paths.bower
  ]));

  gulp.task('clean:reports', $.del.bind(null, [
    $.config.paths.reports
  ]));

  gulp.task('clean', ['clean:reports']);

};
