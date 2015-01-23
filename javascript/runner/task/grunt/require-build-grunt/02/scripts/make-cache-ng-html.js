/*
  build with node.js gulp and plugins
*/


// http://documentup.com/arturadib/shelljs
require('shelljs/global');

// https://github.com/chevex/yargs
var argv = require('yargs').argv;

//---------------------------------------------------------------------------

var series          = require('stream-series');

var gulp            = require('gulp');
var htmlmin         = require('gulp-htmlmin');
var html2js         = require('gulp-ng-html2js');
var templateCache   = require('gulp-angular-templatecache');

//---------------------------------------------------------------------------

var minify = require('html-minifier').minify;

var config = {
  htmlmin: {
    collapseBooleanAttributes: true,
    collapseWhitespace: true,
    removeAttributeQuotes: true,
    removeComments: true,
    removeEmptyAttributes: true,
    removeRedundantAttributes: true,
    removeScriptTypeAttributes: true,
    removeStyleLinkTypeAttributes: true
  }
};

//---------------------------------------------------------------------------

var source = 'src';
var destination = 'cache';

if( argv._.length > 0 ) {
  if(argv._[0]) source = argv._[0];
  if(argv._[1]) destination = argv._[1];
}

//---------------------------------------------------------------------------

// do job
(function() {
  echo('\ncreating templates cache for angular');

  // gulp
    // .src([ source + '/**/*.html' ])
    // .pipe( htmlmin( config.htmlmin ) )
    // .pipe( html2js() )
    // .pipe( gulp.dest( destination ) )

  function done() {
    echo('\nOK!');
  }

  // makeCache( done );

  makeCache2().on('end', done);

})();

//---------------------------------------------------------------------------

function makeCache(done) {

  function runCoreStream(cb) {
    console.log(source);
    gulp
      .src([ source + '/core/**/*.html' ])
      .pipe( htmlmin( config.htmlmin ) )
      .pipe( templateCache() )
      .pipe( gulp.dest( destination + '/app/core' ) )
      .on('end', function() {
        if(cb) cb();
      });
  }

  function runModulesStream(cb) {
    gulp
      .src([ source + '/modules/**/*.html' ])
      .pipe( htmlmin( config.htmlmin ) )
      .pipe( templateCache() )
      .pipe( gulp.dest( destination + '/app/modules' ) )
      .on('end', function() {
        if(cb) cb();
      });
  }

  runCoreStream(
    runModulesStream(done)
  );

}


function makeCache2() {

  var coreStream = gulp
    .src([ source + '/core/**/*.html' ])
    .pipe( htmlmin( config.htmlmin ) )
    .pipe( templateCache() )
    .pipe( gulp.dest( destination + '/app/core' ) );


  var modulesStream = gulp
    .src([ source + '/modules/**/*.html' ])
    .pipe( htmlmin( config.htmlmin ) )
    .pipe( templateCache() )
    .pipe( gulp.dest( destination + '/app/modules' ) );

  return series(coreStream, modulesStream);

}
