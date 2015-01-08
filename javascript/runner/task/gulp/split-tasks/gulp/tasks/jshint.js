module.exports = function(gulp, $) {

  gulp.task('jshint', function() {

    return gulp.src(
        $.paths.src + '/**/*.js'
      )
      // .pipe($.jshint('.jshintrc'))
      .pipe($.jshint())
      .pipe($.jshint.reporter('jshint-summary', {
        fileColCol: ',bold',
        positionCol: ',bold',
        codeCol: 'green,bold',
        reasonCol: 'cyan'
      }))
      .pipe($.jshint.reporter('fail'));

  });

};
