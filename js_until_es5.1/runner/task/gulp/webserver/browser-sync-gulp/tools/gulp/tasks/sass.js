module.exports = function(gulp, $) {

  gulp.task('sass:dev', function() {
    return gulp.src( $.config.styles.main )
      .pipe( $.if( $.is.debug, $.debug() ) )
      .pipe( $.plumber() )
      .pipe( $.sass({ onError: $.onError }) )
      .pipe( gulp.dest( $.path.join( $.config.paths.build, 'styles' ) ) )
      .pipe( $.filter( '**/*.css' ) )
      .pipe( $.if( $.browserSync.active, $.reload({stream: true}) ) );
  });

  gulp.task('sass:prod', function() {
    return gulp.src( $.config.styles.main )
      .pipe( $.if( $.is.debug, $.debug() ) )
      .pipe( $.plumber() )
      .pipe( $.sass({ onError: $.onError }) )
      .pipe( $.minifyCss() )
      .pipe( $.insert.prepend( $.config.banner ) )
      .pipe( gulp.dest( $.path.join( $.config.paths.outputDir, 'styles' ) ) );
  });

};
