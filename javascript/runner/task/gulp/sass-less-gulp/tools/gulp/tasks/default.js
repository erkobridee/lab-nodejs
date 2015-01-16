module.exports = function(gulp, $) {

  gulp.task('help', $.taskListing);

  //---

  gulp.task('default', ['jshint', 'build', 'copy'], function() {

    $.projectInfoMsg();

  });

};
