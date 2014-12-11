var path  = require('path'),
    Q     = require('q'),
    fs    = require('q-io/fs');


var source = '../../requirejs_build';

function processDirectory() {

  function filterOnlyFiles(path, stat) {
    // ignore dot files like .DS_Store
    var filename = path.split('/').pop();
    return stat.isFile() && !filename.match(/^\./);
  }

  return fs.listTree(source, filterOnlyFiles); // list files

}

var output = '../output/walkdir.requirejs_build.result.txt';

processDirectory()
  .then(function(files) {

    return Q.all(files.sort().map(function( filePath ) {

      return filePath; //resultTxt += filePath + '\n';

    }));

  })
  .then(function( files ) {

    var resultTxt = '\n  walkdir/q-io_fs.js\n\n';

    files.forEach(function(filename) {
      resultTxt += filename + '\n';
    });

    return resultTxt;
  })
  .then(function( content ) {

    writeFile( output, content );

  });


//---

function writeFile(filename, content) {

  var writer = require('../libs/writer');

  writer( filename, content )
    .then(function() {
      console.log('It\'s saved!');
    });

}
