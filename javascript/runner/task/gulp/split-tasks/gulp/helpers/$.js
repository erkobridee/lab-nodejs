
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
var configs = require('../config');

module.exports.paths = configs.paths;

// Expose all supported args from command line
module.exports.config = {
  release: args.release || false,
  livereload: args.livereload || configs.webserver.livereload || false,
  port: parseInt(args.port, 10) || configs.webserver.port || 8000
};
