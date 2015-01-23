var path  = require('path'),
    Q     = require('q'),
    fs    = require('q-io/fs');

// sample
/*
options = {
  source: './src/app',
  fileMatch: /package\.js$/,
  ignorePath: 'lazy/'
  removeBase: 'src/'
}
*/
function processDirectory( options ) {

  if( !options ) throw new Error('options not defined');

  if( !options.source )  throw new Error('options.source not defined');
  var source = options.source;

  if( !options.fileMatch )  throw new Error('options.fileMatch not defined');
  var fileMatch = options.fileMatch;
  // fileMatch = fileMatch || /\.js$/; // only .js

  if( !options.removeBase )  throw new Error('options.removeBase not defined');
  var removeBase = options.removeBase;

  if( typeof removeBase !== 'string' ) {
    removeBase = false;
  } else {
    if( removeBase.match(/^\.\//) ) removeBase = removeBase.replace('./', '');
  }

  var ignorePath = options.ignorePath || '!';

  //---

  function filterOnlyFiles(path, stat) {

    var filename = path.split('/').pop();

    return stat.isFile() &&
      !path.match( /node_modules/ ) && // ignore /node_modules
      !(path.indexOf( ignorePath ) != -1) &&
      !filename.match( /^\./ ) && // ignore dot files like .DS_Store
      filename.match( fileMatch );

  }

  function updatedFilePath( filePath ) {
    if( removeBase ) {
      return filePath.replace( removeBase, '' );
    }
    return filePath;
  }

  function addLocation(filename) {
    var name = filename.replace( 'package.js', '' );
    return name;
  }

  return fs
    .listTree(source, filterOnlyFiles) // list files
    .then(function orderFiles(files) {
      return Q.all(files.sort().map(function( filePath ) {
        return updatedFilePath( filePath );
      }));
    })
    .then(function defineLocationsArray(files) {
      var locations = [];
      files.forEach(function(filename) {
        locations.push(addLocation(filename));
      });
      return locations;
    });
    ;

}

//---

module.exports = processDirectory;
