module.exports = function(gulp, $) {

  var jshintStream = $.lazypipe()
    .pipe( $.jshint )
    .pipe( $.jshint.reporter, 'jshint-stylish' )
    // .pipe( $.jshint.reporter, 'jshint-summary' )
    .pipe( $.jshint.reporter, 'fail' );

  gulp.task('jshint:tools', function() {
    return gulp.src([
        'gulpfile.js',
        'tools/**/*.js'
      ])
      .pipe( jshintStream() );
  });

  gulp.task('jshint:project', function() {
    return gulp.src(
        $.config.paths.src + '/**/*.js'
      )
      .pipe( jshintStream() );
  });

  gulp.task('jshint', ['jshint:tools', 'jshint:project']);

};
