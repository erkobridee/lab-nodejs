
// Expose all Gulp plugins found
module.exports = require('gulp-load-plugins')();

//---

// Expose some other modules (local or not)
module.exports.lazypipe = require('lazypipe');
module.exports.del = require('del');

//---

var pkg = module.exports.pkg = require('../../package.json');

//---

var args = require('yargs').argv;
var configs = require('../config');
var isCDN = args.cdn || false;

// Expose all supported args from command line
module.exports.config = {
  debug: args.degub || false,
  release: args.release || false,
  less: args.less || false
};

module.exports.paths = configs.paths;

module.exports.outputDir = defineOutputDir();

function defineOutputDir() {
  var path = require('path');
  var dist = configs.paths.dist || 'dist';

  if ( isCDN ) {
    dist = path.join( dist, pkg.name, pkg.version );
  }

  return dist;
}

//---

// to share streams to gulp tasks
module.exports.streams = {};

//---

