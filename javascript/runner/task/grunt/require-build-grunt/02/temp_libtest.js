var findRequireModules = require('./helpers/lib/find-require-modules');

var source = './src/app/modules';
var fileMatch = /package\.js$/;
var removeBase = 'src/';
// var removeBase = 1;

findRequireModules(source, fileMatch, removeBase)
  .then(function filesPath(files) {

    var resultTxt = '\nrequire.js modules\n\n';

    files.forEach(function(filename) {
      resultTxt += filename + '\n';
    });

    console.log( resultTxt );

  });

