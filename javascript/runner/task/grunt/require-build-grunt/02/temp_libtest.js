var findRequireModules = require('./helpers/lib/requirejs/find-modules');

var source = './src/app/modules';
var fileMatch = /package\.js$/;
var removeBase = 'src/';
var mainModule = '_ng.app_';
var excludeModule = '_require.config_';

findRequireModules({
  source: source,
  fileMatch: fileMatch,
  removeBase: removeBase/*,
  mainModule: mainModule,
  excludeModule: excludeModule
  */
})
  .then(function modules(modulesArray) {

    console.log(modulesArray);

  });
