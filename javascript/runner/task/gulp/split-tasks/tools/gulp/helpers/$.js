// Expose all Gulp plugins found
var $ = module.exports = require('gulp-load-plugins')();

//---

$.path            = require('path');

$.rootPath = $.path.resolve( './' );

// [Gist] Better local require() paths for Node.js
// https://gist.github.com/branneman/8048520
$.rootRequire = function( name ) {
  return require( $.path.join( $.rootPath, name ) );
};

//---
// Expose some other modules

$.del             = require('del');
$.lazypipe        = require('lazypipe');

  //--- local modules

$.pkg = $.rootRequire('package.json');

$.config = $.rootRequire('tools/config');

$.localip = $.rootRequire('tools/lib/localip');

//---

$.args = require('yargs').argv;

//---

$.is = {
  debug     : !!$.args.debug,
  release   : !!$.args.release,
  cdn       : !!$.args.cdn
};

//---
// @begin: define output dir

(function() {

  var output = $.config.paths.dist || 'dist';
  if( $.is.cdn ) {
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
    .port = parseInt($.args.port, 10) || $.config.webserver.port || 3000;

  $.config
    .webserver
    .directoryListing = $.args.directoryListing || $.config.webserver.directoryListing || false;

  $.config
    .webserver
    livereload = $.args.livereload || $.config.webserver.livereload || false;

  $.config
    .webserver
    .open = 'http://' + $.localip + ':' + $.config.webserver.port;

})();

// @end: check webserver configs
//---

/**
 * Log a message or series of messages using chalk's blue color.
 * Can pass in a string, object or array.
 */
$.log = function(msg) {
  if (typeof(msg) === 'object') {
    for (var item in msg) {
      if (msg.hasOwnProperty(item)) {
        $.util.log($.util.colors.blue(msg[item]));
      }
    }
  } else {
    $.util.log($.util.colors.blue(msg));
  }
};

$.onError = function(err) {
  $.log(err);
};

//---

$.projectInfoMsg = function() {
  $.log('');
  $.log('project: ' + $.pkg.name + ' v' + $.pkg.version);
  $.log('description: ' + $.pkg.description);
  $.log('');

  var msg = '';

  if( $.is.release ) {
    msg += ' release';

    if( $.is.cdn ) {
      msg += ' to CDN deploy';
    }

    $.log('>> ' + msg);
    $.log('');
  }
};

//---
