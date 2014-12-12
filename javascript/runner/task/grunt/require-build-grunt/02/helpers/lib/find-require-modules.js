var path  = require('path'),
    Q     = require('q'),
    fs    = require('q-io/fs');

function processDirectory(source, fileMatch, removeBase) {

  fileMatch = fileMatch || /\.js$/; // only .js

  if( typeof removeBase !== 'string' ) removeBase = false;
  console.log( removeBase );

  function filterOnlyFiles(path, stat) {

    var filename = path.split('/').pop();

    return stat.isFile() &&
      !path.match( /node_modules/ ) && // ignore /node_modules
      !filename.match( /^\./ ) && // ignore dot files like .DS_Store
      filename.match( fileMatch );

  }

  function updatedFilePath( filePath ) {
    if( removeBase ) {
      return filePath.replace( removeBase, '' );
    }
    return filePath;
  }

  return fs
    .listTree(source, filterOnlyFiles) // list files
    .then(function orderFiles(files) {
      return Q.all(files.sort().map(function( filePath ) {
        return updatedFilePath( filePath );
      }));
    })
    ;

}

//---

module.exports = processDirectory;
