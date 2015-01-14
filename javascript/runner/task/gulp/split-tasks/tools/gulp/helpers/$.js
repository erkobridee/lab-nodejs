
// Expose all Gulp plugins found
module.exports = require('gulp-load-plugins')();

//---

// Expose some other modules (local or not)
module.exports.lazypipe         = require('lazypipe');
module.exports.del              = require('del');

var path = module.exports.path  = require('path');

//---

var pkg = module.exports.pkg = require('../../../package.json');
// var pkg = module.exports.pkg = rootRequire('package.json');

//---

var configs = require('../../config');
var localip = require('../../lib/localip')();

var args = require('yargs').argv;

var is = module.exports.is = {
  release: args.release || false,
  cdn: args.cdn || false
};

var paths = module.exports.paths = configs.paths;

(function() {
  var output = paths.dist || 'dist';
  if( is.cdn ) {
    output = path.join( output, pkg.name, pkg.version );
  }
  paths.outputDir = output;
})();

var config = module.exports.config = {};

var serverPort = parseInt(args.port, 10) || configs.webserver.port || 8000;

config.webserver = {
  directoryListing: args.directoryListing || configs.webserver.directoryListing || false,
  livereload: args.livereload || configs.webserver.livereload || false,
  port: serverPort,
  open: 'http://' + localip + ':' + serverPort
};
