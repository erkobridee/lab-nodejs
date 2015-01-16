module.exports = function(gulp, $) {

  gulp.task('default', ['jshint', 'build', 'copy'], function() {

    $.util.log('');
    $.util.log('project: ' + $.pkg.name + ' v' + $.pkg.version);
    $.util.log('description: ' + $.pkg.description);
    $.util.log('');

    var msg = '';
    if( $.is.less ) {
      msg += 'LESS compiled';
    } else {
      msg += 'SASS compiled';
    }

    if( $.is.release ) {
      msg += ' + minifed';
    }

    if( $.is.cdn ) {
      msg += ' and prepared to CDN deploy';
    }

    $.util.log('>> ' + msg);
    $.util.log('');

  });

};
