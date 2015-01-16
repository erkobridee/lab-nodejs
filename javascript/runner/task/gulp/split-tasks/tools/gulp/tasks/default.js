module.exports = function(gulp, $) {

  gulp.task('default', ['build'], function() {
    $.util.log('');
    $.util.log('project: ' + $.pkg.name + ' v' + $.pkg.version);
    $.util.log('description: ' + $.pkg.description);
    $.util.log('');
  });

};
