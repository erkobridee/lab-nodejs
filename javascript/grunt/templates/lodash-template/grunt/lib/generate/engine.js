var _     = require('lodash-node'),
    path  = require('path'),
    Q     = require('q'),
    fs    = require('q-io/fs');

/*
  1 - load templates from directory
  2 - compile and cache templates
  3 - process templates
  4 - output files
*/

module.exports = function generate(options) {

  //---------------------------------------------

  /*
  var options = {
    source: '',
    destination: '',
    values: {}
  };
  */

  if( !options ) throw new Error('options not defined');

  if( !options.source )  throw new Error('options.source not defined');

  if( !options.destination )  throw new Error('options.destination not defined');

  if( !options.values )  throw new Error('options.values not defined');

  var _updateFileName = options.updateFileName || function( name ) { return name; };

  //---------------------------------------------
  // internal functions

  function filterOnlyFiles(path, stat) {
    // ignore dot files like .DS_Store
    var filename = path.split('/').pop();
    return stat.isFile() && !filename.match(/^\./);
  }

  //---------------------------------------------
  // internal variables

  var metadata = {};
  var templateCache = {};

  //---------------------------------------------
  // templates processment flow

  return fs.listTree(source, filterOnlyFiles) // list files
    .then(function(files) {

      var templateName, output;

      return Q.all(files.sort().map(function(filePath) {

        return fs.read(filePath).then(function(content) { // read template file

          templateName = filePath.replace(source + '/', '');

          output = {
            path: filePath,
            name: path.basename(filePath),
            templateName: templateName,
            directory: path.dirname( filePath ).replace(source, ''),
            content: content
          };

          metadata[templateName] = output;
          templateCache[templateName] = _.template(content);

          return output;

        });

      }));
    })
    .then(function(files) { // compile and write files

      Q.all(files.map(function(file) {

        var fileUrl, content;

        // define file destination
        fileUrl = path.join(
          destination, // output directory
          values.name, // processed templates directory output
          file.directory, // exist some sub directory ?
          _updateFileName( file.name ) // output file name
        );


        // process template
        content = templateCache[file.templateName](values);


        // create directories tree
        return fs.makeTree(path.dirname(fileUrl)).then(function() {
          return fs.write(fileUrl, content); // write file to disk
        });

      }));


    });;

};
