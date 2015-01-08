module.exports = function(gulp, $) {

  gulp.task('default', ['build'], function() {
    console.log('');
    console.log('project: ' + $.pkg.name + ' v' + $.pkg.version);
    console.log('description: ' + $.pkg.description);
    console.log('');
  });

};
