var path          = require('path');
var del           = require('del');
var gulp          = require('gulp');
var gutil         = require('gulp-util');
var less          = require('gulp-less');
var sourcemaps    = require('gulp-sourcemaps');
var debug         = require('gulp-debug');


var LessPluginCleanCSS = require("less-plugin-clean-css"),
    cleancss = new LessPluginCleanCSS({advanced: true});

var LessPluginAutoPrefix = require('less-plugin-autoprefix'),
    autoprefix = new LessPluginAutoPrefix({
      browsers: [
        'last 2 versions'
      ]
    });


var config = {
  src: 'less',
  dist: 'dist'
};

//---

gulp.task('clean:css', del.bind(null, [ config.dist ]));

gulp.task('clean', ['clean:css']);


gulp.task('less', ['clean'], function() {
  return gulp.src( path.join( config.src, 'main.less' ) )
    .pipe( debug() )

    .pipe(less({
      // compress: true,
      plugins: [autoprefix] // cleancss
    }))
    .on( 'error', gutil.log )

    .pipe( gulp.dest( config.dist ) );
});


gulp.task('build:css', function() {
  return gulp.src( path.join( config.src, 'main.less' ) )
    .pipe( debug() )

    .pipe( sourcemaps.init() )

    .pipe( less() )
    .on('error', gutil.log)

    .pipe( sourcemaps.write() )

    .pipe( gulp.dest( config.dist ) );
});

//---

gulp.task('default', ['clean:css', 'build:css']);
