var path = require('path');
var args = require('yargs').argv;

//---

var rootPath = path.resolve('./');
var pathFromRoot = path.join.bind(path, rootPath);

function rootRequire( target ){
  return require( pathFromRoot( target ) );
}

//---

var npmPackageIds = (function getNPMPackageIds(){
  // read package.json and get dependencies' package ids
  var packageManifest = {};
  try {
    packageManifest = rootRequire('package.json');
  } catch (e) {
    // does not have a package.json manifest
  }
  return Object.keys(packageManifest.dependencies || {}) || [];
})();

function getNPMPackageIds(){
  return npmPackageIds.slice(0);
}

//---

function hasProcessFlag(flag) {
  return process.argv.join('').indexOf(flag) > -1;
}

var EVENT = process.env.npm_lifecycle_event || '';
function hasNpmFlag(flag) {
  return EVENT.includes(flag);
}

function isWebpackDevServer() {
  return process.argv[1] && !! (/webpack-dev-server/.exec(process.argv[1]));
}

//---

var env = (function getEnv(args){
  var output = args.env;
  if(output){
    switch (output) {
      case 'prod':
      case 'production':
        output = 'production';
        break;
      case 'dev':
      case 'development':
      default:
        output = 'development';
        break;
    }
  }
  return (output || process.env.ENV || process.env.NODE_ENV || 'development');
})(args);

var METADATA = {
  ENV   : env,
  HOST  : (process.env.HOST || 'localhost'),
  PORT  : (process.env.PORT || 3000),
  HMR   : hasProcessFlag('hot')
};

//---

module.exports = {
  root : pathFromRoot,
  rootRequire : rootRequire,

  getNPMPackageIds : getNPMPackageIds,

  hasProcessFlag : hasProcessFlag,
  hasNpmFlag : hasNpmFlag,
  isWebpackDevServer : isWebpackDevServer,

  METADATA : METADATA
};
