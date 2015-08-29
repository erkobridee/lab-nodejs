module.exports = function(gulp, $) {

  // TODO: review

  gulp.task('karma:unit:single-run', function( done ) {
    $.karma.server.start( $.config.karma.unitSingleRun, done );
  });

  gulp.task('karma:unit', ['karma:unit:single-run'], function() {
    $.karma.background( $.config.karma.unit );
    $.karma.background.running = true;
  });

  gulp.task('karma:unit:run', function( done ) {
    if( $.karma.background.running ) {
      $.karma.runner.run( $.config.karma.unit, done );
    } else {
      done();
    }
  });

  gulp.task('karma:unit:dev', function( done ) {
    $.karma.server.start( $.config.karma.unit, done );
  });


  gulp.task('karma:coverage', function( done ) {
    $.karma.server.start( $.config.karma.coverage, done );
  });

  gulp.task('karma:ci', function( done ) {
    $.karma.server.start( $.config.karma.ci, done );
  });

};
