var findRequireModules = require('./helpers/lib/find-require-modules');

var source = './src/app/modules';
var fileMatch = /package\.js$/;
var removeBase = 'src/';
// var removeBase = 1;

findRequireModules(source, fileMatch, removeBase)
  .then(function modules(modulesArray) {

    console.log(modulesArray);

  });

/* old
findRequireModules(source, fileMatch, removeBase)
  .then(function filesPath(files) {

    var resultTxt = '\nrequire.js modules\n\n';

    var modules = [{name: 'ng.app'}];

    files.forEach(function(filename) {
      resultTxt += filename + '\n';

      modules.push(addModule(filename));
    });

    console.log( resultTxt );

    console.log( modules );

  });


function addModule(filename) {
  var name = filename.replace( '.js', '' );
  return {
    name: name,
    exclude: ['require.config']
  };
}
*/
