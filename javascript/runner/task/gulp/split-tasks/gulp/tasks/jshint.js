module.exports = function(gulp, $) {

  var jshintStream = $.lazypipe()
    .pipe($.jshint)
    .pipe($.jshint.reporter, 'jshint-summary', {
      fileColCol: ',bold',
      positionCol: ',bold',
      codeCol: 'green,bold',
      reasonCol: 'cyan'
    })
    .pipe($.jshint.reporter, 'fail');

  //---

  gulp.task('jshint:gulp', function() {

    return gulp.src([
        'gulpfile.js',
        'gulp/**/*.js'
      ])
      .pipe( jshintStream() );

  });

  gulp.task('jshint:project', function() {

    return gulp.src( $.paths.src + '/**/*.js' )
      .pipe( jshintStream() );

  });

  gulp.task('jshint', ['jshint:gulp', 'jshint:project']);

};
