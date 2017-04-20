module.exports = function(gulp, $) {

  gulp.task('watch:dev', ['browserSync:dev'], function() {


    // gulp.watch([$.config.paths.src + '/styles/**.scss'], ['sass:dev']);
    // gulp.watch([$.config.paths.src + '/scripts/**/*.js'], ['jshint:project', $.reload]);
    // gulp.watch([$.config.paths.src + '/**/*.html'], $.reload);

    gulp.watch([$.config.styles.project], ['sass:dev']);
    gulp.watch([$.config.js.project], ['jshint:project', $.reload]);
    gulp.watch([$.config.html.project], $.reload);

  });

};
