module.exports = function(gulp, $) {

  gulp.task('build:js', ['clean:dist', 'jshint:project'], function() {

    var releaseStream = $.lazypipe()
      .pipe( $.uglify )
      .pipe( $.rename, { suffix: '.min' } );

    return gulp
      .src( $.path.join( $.paths.src, '*.js' ) )
      .pipe( $.if( $.is.release, releaseStream() ) )
      .pipe(
        $.is.cdn ?
        gulp.dest( $.paths.cdnOutput ) :
        gulp.dest( $.paths.dist )
      );

  });

  gulp.task('build', ['build:js']);

};
