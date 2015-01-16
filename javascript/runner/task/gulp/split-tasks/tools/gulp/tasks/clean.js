
// https://github.com/gulpjs/gulp/blob/master/docs/recipes/delete-files-folder.md

module.exports = function(gulp, $) {

  gulp.task('clean:dist', function(cb) {
    $.del([
      $.config.paths.dist
    ], cb);
  });


  gulp.task('clean', ['clean:dist']);

};
