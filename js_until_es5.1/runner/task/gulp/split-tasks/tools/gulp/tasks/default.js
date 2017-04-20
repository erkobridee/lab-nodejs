module.exports = function(gulp, $) {

  gulp.task('default', ['build'], function() {
    $.projectInfoMsg();
  });

};
