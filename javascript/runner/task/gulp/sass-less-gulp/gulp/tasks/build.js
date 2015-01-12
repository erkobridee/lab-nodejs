module.exports = function(gulp, $) {

  gulp.task('build', ['clean'], function() {
    if( $.config.less ) {
      return $.streams.less();
    } else {
      return $.streams.sass();
    }
  });

};
