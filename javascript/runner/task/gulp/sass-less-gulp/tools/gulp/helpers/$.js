
// Expose all Gulp plugins found
module.exports = require('gulp-load-plugins')();

//---

// Expose some other modules (local or not)
module.exports.lazypipe         = require('lazypipe');
module.exports.del              = require('del');

var path = module.exports.path  = require('path');

//---

var pkg = module.exports.pkg = require('../../../package.json');

//---

var configs = require('../../config');

var args = require('yargs').argv;

var is = module.exports.is = {
  debug: args.degub || false,
  release: args.release || false,
  cdn: args.cdn || false,
  less: args.less || false
};

var paths = module.exports.paths = configs.paths;

(function() {
  var output = paths.dist || 'dist';
  if( is.cdn ) {
    output = path.join( output, pkg.name, pkg.version );
  }
  paths.outputDir = output;
})();

//---

// to share streams to gulp tasks
module.exports.streams = {};

//---
