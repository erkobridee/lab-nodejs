module.exports = function(gulp, $) {

  gulp.task('help', $.taskListing);

  //---

  gulp.task('flow:default', ['jshint', 'build', 'copy']);

  //--

  gulp.task('default', ['flow:default'], function() {

    $.projectInfoMsg();

  });

};
