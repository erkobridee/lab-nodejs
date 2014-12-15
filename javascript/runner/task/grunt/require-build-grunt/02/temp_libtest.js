var findRequireModules = require('./helpers/lib/find-require-modules');

var source = './src/app/modules';
var fileMatch = /package\.js$/;
var removeBase = 'src/';
var mainModule = '_ng.app_';
var excludeModule = '_require.config_';
// var removeBase = 1;

findRequireModules(
  source, fileMatch, removeBase,
  mainModule, excludeModule
)
  .then(function modules(modulesArray) {

    console.log(modulesArray);

  });
