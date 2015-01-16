var args = require('yargs').argv;

//---

// Expose all Gulp plugins found
var $ = module.exports = require('gulp-load-plugins')();

//---

// Expose some other modules (local or not)
$.path            = require('path');
$.del             = require('del');
$.lazypipe        = require('lazypipe');

//---

$.onError = function (err) {
  $.util.log(err);
};

//---

$.is = {
  debug     : args.debug || false,
  release   : args.release || false,
  cdn       : args.cdn || false
};

//---

$.pkg = require('../../../package.json');

$.localip = require('../../lib/localip')();

$.config = require('../../config');

//---
// @begin: define output dir

(function() {

  var output = $.config.paths.dist || 'dist';
  if( $.is.cdn && $.is.release ) {
    output = $.path.join( output, $.pkg.name, $.pkg.version );
  }
  $.config.paths.outputDir = output;

})();

// @end: define output dir
//---
// @begin: check webserver configs

(function() {

  $.config
    .webserver = $.config.webserver || {};

  $.config
    .webserver
    .port = parseInt(args.port, 10) || $.config.webserver.port || 3000;

  $.config
    .webserver
    .directoryListing = args.directoryListing || $.config.webserver.directoryListing || false;

  $.config
    .webserver
    livereload = args.livereload || $.config.webserver.livereload || false;

  $.config
    .webserver
    .open = 'http://' + $.localip + ':' + $.config.webserver.port;

})();

// @end: check webserver configs
//---
