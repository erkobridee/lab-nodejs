var args = require('yargs').argv;

//---

// Expose all Gulp plugins found
var $ = module.exports = require('gulp-load-plugins')();

//---

// shared streams to gulp tasks
$.streams = {};

//---

// Expose some other modules (local or not)
$.path            = require('path');
$.del             = require('del');
$.lazypipe        = require('lazypipe');
$.runSequence     = require('run-sequence');

//---

$.onError = function (err) {
  $.util.log(err);
};

//---

$.is = {
  debug     : args.debug || false,
  release   : args.release || false,
  cdn       : args.cdn || false,
  less      : args.less || false
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
