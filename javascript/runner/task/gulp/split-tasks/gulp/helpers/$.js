
// Expose all Gulp plugins found
module.exports = require('gulp-load-plugins')();

//---

// Expose some other modules (local or not)
module.exports.lazypipe = require('lazypipe');
module.exports.del = require('del');

//---

module.exports.pkg = require('../../package.json');

//---

var args = require('yargs').argv;

module.exports.is = {
  release: args.release || false
};

var configs = require('../config');

module.exports.paths = configs.paths;

var config = module.exports.config = {};

config.webserver = {
  directoryListing: args.directoryListing || configs.webserver.directoryListing || false,
  livereload: args.livereload || configs.webserver.livereload || false,
  port: parseInt(args.port, 10) || configs.webserver.port || 8000
};
