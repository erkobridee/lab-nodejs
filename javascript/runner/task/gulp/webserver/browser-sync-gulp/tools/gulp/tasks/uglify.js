module.exports = function(gulp, $) {

  gulp.task('uglify:main.js', function() {
    return gulp.src( $.config.js.main )
      .pipe( $.if( $.is.debug, $.debug() ) )
      .pipe( $.uglify() )
      .pipe( $.insert.prepend( $.config.banner ) )
      .pipe( gulp.dest( $.path.join( $.config.paths.outputDir, 'scripts' ) ) );
  });

};
