var path  = require('path'),
    Q     = require('q'),
    fs    = require('q-io/fs');

// sample
/*
options = {
  source: './src/app/modules',
  fileMatch: /\.js$/,
  removeBase: 'src/',
  mainModule: 'ng.app',
  excludeModule: 'require.config'
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

  if( typeof removeBase !== 'string' ) removeBase = false;

  //---

  var mainModule = options.mainModule || 'ng.app';
  var excludeModule = options.excludeModule || 'require.config';

  //---

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

  function addModule(filename) {
    var name = filename.replace( '.js', '' );
    return {
      name: name,
      exclude: [excludeModule]
    };
  }

  return fs
    .listTree(source, filterOnlyFiles) // list files
    .then(function orderFiles(files) {
      return Q.all(files.sort().map(function( filePath ) {
        return updatedFilePath( filePath );
      }));
    })
    .then(function defineModulesArray(files) {
      var modules = [{ name: mainModule }];
      files.forEach(function(filename) {
        modules.push(addModule(filename));
      });
      return modules;
    });
    ;

}

//---

module.exports = processDirectory;
