module.exports = function(gulp, $) {

  var path = require('path');

  gulp.task('build:js', ['clean:dist', 'jshint:project'], function() {

    var releaseStream = $.lazypipe()
      .pipe( $.uglify )
      .pipe( $.rename, { suffix: '.min' } );

    return gulp
      .src( path.join( $.paths.src, '*.js' ) )
      /*
      .pipe( $.uglify() )
      .pipe( $.rename( { extname: '.min.js' } ) )
      */
      // .pipe(releaseStream())
      .pipe( $.if( $.is.release, releaseStream() ) )
      .pipe( gulp.dest( $.paths.dist ) );

  });

  gulp.task('build', ['build:js']);

};
