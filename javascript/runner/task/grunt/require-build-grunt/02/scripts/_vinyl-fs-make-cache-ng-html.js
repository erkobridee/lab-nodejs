/*
  build with node.js vinyl-fs
*/


// http://documentup.com/arturadib/shelljs
require('shelljs/global');

// var fs = require('fs');
var path = require('path');
var generateModuleDeclaration = require('../helpers/lib/html2js/simpleCompileTemplate');

// https://github.com/chevex/yargs
var argv = require('yargs').argv;

//---------------------------------------------------------------------------

var map   = require('map-stream');
var fs    = require('vinyl-fs');

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
// [GitHub] wearefractal / replace-ext
// https://github.com/wearefractal/replace-ext/blob/master/index.js

function replaceExtension(npath, ext) {
  if (typeof npath !== 'string') return npath;
  if (npath.length === 0) return npath;

  var nFileName = path.basename(npath, path.extname(npath))+ext;
  return path.join(path.dirname(npath), nFileName);
}

//---------------------------------------------------------------------------

function htmlmin(options) {

// [GitHub] jonschlinkert / gulp-htmlmin
// https://github.com/jonschlinkert/gulp-htmlmin/blob/master/index.js

  function minifyHtml(file, cb) {
    if(file.isStream()) {
      return cb(new Error('htmlmin: Streaming not supported'));
    }

    if(file.isNull()) { return cb(null, file); }

    if(file.isBuffer()) {
      file.contents = new Buffer( minify( String( file.contents ), options ) );
    }

    return cb(null, file);
  }

  //---

  return map( minifyHtml );

}

function html2js(options) {

// based on:
// [GitHub] marklagendijk / gulp-ng-html2js
// https://github.com/marklagendijk/gulp-ng-html2js/blob/master/index.js

  function ngHtml2Js(file, cb) {
    if(file.isStream()) {
      return cb(new Error('html2js: Streaming not supported'));
    }

    if(file.isNull()) { return cb(null, file); }

    if(file.isBuffer()) {
      var filePath = getFileUrl(file);
      file.contents = new Buffer( generateModuleDeclaration( filePath, String( file.contents ) ) );
      file.path = replaceExtension(file.path, '.js');
    }

    return cb(null, file);
  }

  function getFileUrl(file) {
    // Start with the relative file path
    var url = file.relative;

    // Replace '\' with '/' (Windows)
    url = url.replace(/\\/g, "/");

    return url;
  }

  //---

  return map( ngHtml2Js )
}

//---------------------------------------------------------------------------

// do job
(function() {
  echo('\ncreating templates cache for angular');

  fs
    .src([ source + '/**/*.html' ])
    .pipe( htmlmin( config.htmlmin ) )
    .pipe( html2js() )
    .pipe( fs.dest( destination ) )
    .on('end', function() {
      echo('\nOK!');
    });

})();

//---------------------------------------------------------------------------
