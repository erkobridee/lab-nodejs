module.exports = function(gulp, $) {

  gulp.task('build:js', ['clean:dist', 'jshint:project'], function() {

    var releaseStream = $.lazypipe()
      .pipe( $.uglify )
      .pipe( $.rename, { suffix: '.min' } );

    return gulp
      .src( $.path.join( $.config.paths.src, '*.js' ) )
      .pipe( $.if( $.is.debug, $.debug() ) )
      .pipe( $.plumber() )
      .pipe( $.if( $.is.release, releaseStream() ) )
      .pipe( gulp.dest( $.config.paths.outputDir ) );

  });

  gulp.task('build', ['build:js']);

};
