var _             = require('lodash-node'),
    _s            = require( 'underscore.string' ),
    path          = require('path'),
    Q             = require('q'),
    fs            = require('q-io/fs'),
    outputDir     = path.join(process.cwd(), '..', '/dist'),
    templatesDir  = path.join(process.cwd(), '..', '/templates'),
    templates     = path.join(templatesDir, '/tplsDir');

//---

console.log('templates directory: \n' + templatesDir);
console.log('templates to load: \n' + templates);
console.log('\n------------------------------------\n');

//--- === ---

/*
  1 - load templates from directory
  2 - compile and cache templates
  3 - process templates
  4 - output files
*/

function generate(source, destination, values) {

  //---------------------------------------------
  // extend values with helpers

  _.assign(values, {

    helpers: {
      capitalize: function(value) {
        return _s.capitalize(value);
      },

      updateFileName: function(sName) {
        var update = values.updateFileName || false;

        if( update ) {
          sName = values.name + _s.capitalize( sName );
        }

        return sName;
      }
    }

  });

  console.log(values);
  //---------------------------------------------
  // internal functions

  function toJSON(value, beauty) {
    beauty = beauty || false;
    return beauty ? JSON.stringify(value, null, 2) : JSON.stringify(value);
  }

  function filterOnlyFiles(path, stat) {
    // ignore dot files like .DS_Store
    var filename = path.split('/').pop();
    return stat.isFile() && !filename.match(/^\./);
  }

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

          console.log('read: ' + filePath);

          templateName = filePath.replace(source + '/', '');

          output = {
            path: filePath,
            name: path.basename(filePath),
            templateName: templateName,
            directory: path.dirname( filePath ).replace(source, ''),
            content: content
          };

          metadata[templateName] = output;

          try {
            templateCache[templateName] = _.template(content);
          } catch(err) {
            throw new TemplateProcessError(filePath, err);
          }

          return output;

        });

      }));
    })
    .then(function(files) { // template files readed

      console.log( '\nfiles: \n'); console.log(toJSON(files));

      console.log('\n------------------------------------\n');

      console.log( '\nmetadata: \n'); console.log(toJSON(metadata, true));

      console.log('\n------------------------------------\n');

      console.log( '\ntemplateCache: \n'); console.log(templateCache);

      return files;

    })
    .then(function(files) {

      console.log('\n------------------------------------\n');
      console.log('Processing templates and writing files\n\n');

      Q.all(files.map(function(file) {

        var fileUrl, content;

        // define file destination
        fileUrl = path.join(
          destination, // output directory
          values.name, // processed templates directory output
          file.directory, // exist some sub directory ?
          values.helpers.updateFileName( file.name ) // output file name
        );

        console.log( fileUrl );

        // process template
        content = templateCache[file.templateName](values);

        console.log( content );

        console.log('\n------------------------------------\n');

        // create directories tree
        return fs.makeTree(path.dirname(fileUrl)).then(function() {
          return fs.write(fileUrl, content); // write file to disk
        });

      }));


    })
    .then(function() {

      return 'finished...';

    });

}

//--- === ---

var valuesToTpls = {
  name: 'useCase',
  users: ['user 1', 'user 2', 'user 3', 'user ...'],
  updateFileName: false
};

//--- === ---

generate(templates, outputDir, valuesToTpls)
  .then(function(msg) {
    console.log(msg);
  })
  .then(function() {
    console.log('end generate() execution');
  })
  .catch(function(error) {
    console.log(error.stack);
  })
  .fin(function() {
    console.log('That\'s it!');
  });
