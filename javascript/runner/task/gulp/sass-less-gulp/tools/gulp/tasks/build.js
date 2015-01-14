module.exports = function(gulp, $) {

  gulp.task('build', ['clean'], function() {
    if( $.is.less ) {
      return $.streams.less();
    } else {
      return $.streams.sass();
    }
  });

};
