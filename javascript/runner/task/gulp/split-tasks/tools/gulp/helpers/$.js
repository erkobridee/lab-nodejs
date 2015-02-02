// Expose all Gulp plugins found
var $ = module.exports = require('gulp-load-plugins')();

//---

// Expose some other modules (local or not)
$.path            = require('path');
$.del             = require('del');
$.lazypipe        = require('lazypipe');

//---

$.args = require('yargs').argv;

//---

$.is = {
  debug     : !!$.args.debug,
  release   : !!$.args.release,
  cdn       : !!$.args.cdn
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
