module.exports = function(gulp, $) {

  // wf - watch flow

    // bs - browser sync
  gulp.task('wf:bs:reload', function() {
    if( $.browserSync.active ) $.reload();
  });

  gulp.task('wf', function( done ) {
    var runTasks = ['jshint'];
    if($.Karmaflow) {
      runTasks.push([
        'wf:bs:reload',
        'karma:unit:single-run'
      ]);
    } else {
      runTasks.push('wf:bs:reload');
    }
    runTasks.push(done);
    $.runSequence.apply(null, runTasks);

    // $.runSequence(
    //   'jshint',
    //   [
    //     'wf:bs:reload',
    //     'karma:unit:single-run'
    //   ],
    //   done
    // );
  });

  gulp.task('watch', function() {
    var watchFor;
    if($.Karmaflow){
      watchFor = ['{src,tests}/**/*.js'];
    } else {
      watchFor = ['src/**/*.js'];
    }
    gulp.watch(watchFor, ['wf']);
  });

};
