module.exports = function(gulp, $) {

  // TODO: review

  /*
    Karma Runner 0.13+
    https://karma-runner.github.io/0.13/dev/public-api.html

    https://github.com/karma-runner/gulp-karma/commit/d3915b219290f5573e8c802e157bec18059b1d69
  */

  gulp.task('karma:unit:single-run', function( done ) {
    new $.karma
      .Server( $.config.karma.unitSingleRun, done )
      .start();
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
    new $.karma
      .Server( $.config.karma.unit, done )
      .start();
  });


  gulp.task('karma:coverage', function( done ) {
    new $.karma
      .Server( $.config.karma.coverage, done )
      .start();
  });

  gulp.task('karma:ci', function( done ) {
    new $.karma
      .Server( $.config.karma.ci, done )
      .start();
  });

};
