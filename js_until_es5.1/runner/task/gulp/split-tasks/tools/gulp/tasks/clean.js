
// https://github.com/gulpjs/gulp/blob/master/docs/recipes/delete-files-folder.md

module.exports = function(gulp, $) {

  gulp.task('clean:dist', $.del.bind(null, [
    $.config.paths.dist
  ]));


  gulp.task('clean', ['clean:dist']);

};
