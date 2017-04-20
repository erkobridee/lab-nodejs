module.exports = function(gulp, $) {

  var jshintStream = $.lazypipe()
    .pipe( $.jshint )
    .pipe( $.jshint.reporter, 'jshint-summary', {
      fileColCol: ',bold',
      positionCol: ',bold',
      codeCol: 'green,bold',
      reasonCol: 'cyan'
    })
    .pipe( $.jshint.reporter, 'fail' );

  //---

  gulp.task('jshint:tools', function() {

    return gulp
      .src( $.config.js.tools )
      .pipe( jshintStream() );

  });

  gulp.task('jshint', ['jshint:tools']);

};
