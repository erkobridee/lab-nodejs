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
  // check options

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

  function TemplateProcessError(message, error) {
    this.constructor.prototype.__proto__ = Error.prototype;
    Error.captureStackTrace(this, this.constructor);
    this.name = this.constructor.name;
    this.message = message;

    this.toString = function() {
      var out = this.name + ': \n  ' + this.message;
      if(error) out += '\nTemplate Error :\n  ' + error.stack;
      return out;
    }
  }

  //---------------------------------------------

  function processDirectory() {

    var metadata = {};
    var templateCache = {};

    function filterOnlyFiles(path, stat) {
      // ignore dot files like .DS_Store
      var filename = path.split('/').pop();
      return stat.isFile() && !filename.match(/^\./);
    }

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

            try{
              templateCache[templateName] = _.template(content);
            } catch(err) {
              throw new TemplateProcessError(filePath, err);
            }

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


      });

  }

  //---------------------------------------------

  function processFile() {

    return fs.read(source).then(function(content) { // read template file

      var tplCache = null;
      try{
        tplCache = _.template(content);
      } catch(err) {
        throw new TemplateProcessError(source, err);
      }

      return {
        name: path.basename(filePath),
        templateCache: tplCache
      };

    })
    .then(function(file) {

      var fileUrl, content;

      // define file destination
      fileUrl = path.join(
        destination, // output directory
        _updateFileName( file.name ) // output file name
      );


      // process template
      content = file.templateCache(values);


      // create directories tree
      return fs.makeTree(path.dirname(fileUrl)).then(function() {
        return fs.write(fileUrl, content); // write file to disk
      });

    });

  }

  //---------------------------------------------
  // templates processment flow

  // check if options.source is file or directory
  return fs.exists( source ).then(function( flag ) {

    if( flag ) {

      return fs.stat( source ).then(function( stat ) {

        if( stat.isDirectory() ) {

          return processDirectory(); // directory templates processment flow

        } else if( stat.isFile() ) {

          return processFile(); // file template processment flow

        } else {

          throw new Error( 'Invalid : ' + source );

        }

      });

    } else {

      throw new Error( 'Not found : ' + source );

    }

  });


};
