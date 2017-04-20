var path            = require('path');
var Q               = require('q');
var fs              = require('q-io/fs');

//---

var gulp            = require('gulp');
var htmlmin         = require('gulp-htmlmin');
var templateCache   = require('gulp-angular-templatecache');
var injectString    = require('gulp-inject-string');

//------------------------------------------------------------------------------

var HTML_MIN_COFIG = {
  collapseBooleanAttributes: true,
  collapseWhitespace: true,
  removeAttributeQuotes: true,
  removeComments: true,
  removeEmptyAttributes: true,
  removeRedundantAttributes: true,
  removeScriptTypeAttributes: true,
  removeStyleLinkTypeAttributes: true
};

//---

var TEMPLATE_HEADER = [
  'define(function(require) {',
  '  \'use strict\';',
  '',
  '  var module = require(\'./module\');',
  '',
  '  module.run(runner);',
  '',
  '  //---',
  '',
  '  runner.$inject = [\'$templateCache\'];',
  '',
  '  function runner($templateCache) {',
  ''
].join('\n');

var TEMPLATE_FOOTER = [
  '',
  '  }',
  '});'
].join('\n');

//==============================================================================

function makeCache( options ) {

  if( !options ) throw new Error('options not defined');

  var _templateHeader = options.templateHeader || TEMPLATE_HEADER;
  var _templateFooter = options.templateFooter || TEMPLATE_FOOTER;
  var _htmlmin = options.htmlmin || HTML_MIN_COFIG;

  var _packageFile = options.packageFile || 'package.js';
  var _templatesCacheFile = options.templatesCacheFile || 'templatesCache.js';
  var _requireTemplatesCache = _templatesCacheFile.replace('.js', '');

  if( !options.source )  throw new Error('options.source not defined');
  var _source = options.source;
  var _baseDir = path.basename( _source );

  if( !options.destination )  throw new Error('options.destination not defined');
  var _destination = options.destination;

  if( !options.locations )  throw new Error('options.locations not defined');
  var _locations = options.locations;

  //---

  function makeTemplateCache( location ) {
    var deferred = Q.defer();

    var src = path.join( _source, location, '**/*.html' );
    var dest = path.join( _destination, _baseDir, location );

    gulp
      .src( src )
      .pipe( htmlmin( _htmlmin ) )
      .pipe( templateCache( _templatesCacheFile , {
        root: path.join( _baseDir, location ),
        templateHeader: _templateHeader,
        templateFooter: _templateFooter
      }) )
      .pipe( gulp.dest( dest ) )
      .on('end', function() {
        var packageFilePath = path.join( _source, location, _packageFile );
        var templatesCachePath = path.join( dest, _templatesCacheFile );

        fs
          .exists( templatesCachePath )
          .then(function( flag ) {

            var fileStats = {
              location: location,
              package: packageFilePath,
              templatesCache: templatesCachePath,
              templatesCacheCreated: flag
            };

            deferred.resolve( fileStats );
          });
      });

    return deferred.promise;
  }

  function updatePackageFile( file ) {
    var deferred = Q.defer();

    var dest = path.join( _destination, _baseDir, file.location );

    gulp
      .src( file.package )
      .pipe( injectString.before(
        'return ', 'require(\'./' + _requireTemplatesCache + '\');\n  '
      ) )
      .pipe( gulp.dest( dest ) )
      .on('end', function() {
        deferred.resolve( file );
      });

    return deferred.promise;
  }

  //---

  var promisesArr = [];

  var location = null;
  var promise = null;
  while( _locations.length > 0 ) {
    location = _locations.shift();

    var promise = makeTemplateCache( location )
      .then(function(file) {

        if( file.templatesCacheCreated ) {
          return updatePackageFile( file );
        }

        return file;

      });

    promisesArr.push( promise );
  }
  location = null;
  promise = null;


  return Q.all( promisesArr );

};

//==============================================================================

module.exports = makeCache;
