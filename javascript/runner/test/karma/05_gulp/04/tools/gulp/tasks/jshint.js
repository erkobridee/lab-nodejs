module.exports = function(gulp, $) {

  // TODO: review

  var jshintString = $.lazypipe()
    .pipe( $.cached, 'jshint' )
    .pipe( $.jshint )
    .pipe( $.jshint.reporter, 'jshint-stylish' )
    .pipe( $.jshint.reporter, 'fail' );

  gulp.task('jshint:project', function() {
    return gulp.src( $.config.jshint.project )
      .pipe( jshintString() );
  });

  gulp.task('jshint:tests', function() {
    return gulp.src( $.config.jshint.tests )
      .pipe( jshintString() );
  });

  gulp.task('jshint:tools', function() {
    return gulp.src( $.config.jshint.tools )
      .pipe( jshintString() );
  });

  gulp.task('jshint', ['jshint:project', 'jshint:tests', 'jshint:tools']);

};
