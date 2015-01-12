module.exports = function(gulp, $) {

  gulp.task('default', ['jshint', 'build', 'copy'], function() {
    console.log('');
    console.log('project: ' + $.pkg.name + ' v' + $.pkg.version);
    console.log('description: ' + $.pkg.description);
    console.log('');
  });

};
