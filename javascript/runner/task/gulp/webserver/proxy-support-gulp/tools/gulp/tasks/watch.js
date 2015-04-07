module.exports = function(gulp, $) {

  gulp.task('watch:dev', ['webserver:dev'], function() {

    gulp.watch([$.config.styles.project], ['sass:dev']);
    gulp.watch([$.config.js.project], ['jshint:project', $.reload]);
    gulp.watch([$.config.html.project], $.reload);

  });

};
