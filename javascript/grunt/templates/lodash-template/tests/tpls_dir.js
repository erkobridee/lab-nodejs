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

//---

/*
  1 - values for templates
  2 - process values
*/

var valuesToTpls = {
  name: 'useCase',
  users: ['user 1', 'user 2', 'user 3', 'user ...'],
  updateFileName: true
};


var options = {
  src: '', // templates dir + template to load
  dest: '', // output dir
  values: { // values to process templates
    name: ''
    // nameCapitalized
    // viewName
    // utilScriptName
    // logicScriptName
  }
};


//--- === ---

function toJSON(value) {
  return JSON.stringify(value, null, 2);
}

var filterOnlyFiles = function(path, stat) {
  // ignore dot files like .DS_Store
  var filename = path.split('/').pop();
  return stat.isFile() && !filename.match(/^\./);
};

/*
  1 - load templates from directory
  2 - compile and cache templates
  3 - process templates
  4 - output files
*/


var metadata = {};
var templateCache = {};


function generate(source, destination, values) {

  var templateName, output;

  return fs.listTree(source, filterOnlyFiles) // list files
    .then(function(files) {

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
          templateCache[templateName] = _.template(content);

          return output;

        });

      }));
    }).then(function(files) { // template files readed

      console.log( '\nfiles: \n'); console.log(toJSON(files));

      console.log('\n------------------------------------\n');

      console.log( '\nmetadata: \n'); console.log(toJSON(metadata));

      console.log('\n------------------------------------\n');

      console.log( '\ntemplateCache: \n'); console.log(templateCache);

      return files;

    }).then(function(files) {

      /*
      files.forEach(function(file) {

      });
      */

      /*
        outputFileName = options.values.name + Capitalize( file.name )
        outputFile = path.join( outputDir, options.values.name, file.directoty, outputFileName )
        outputContent = templateCache[file.templateName](options.values)

        write file
      */

      values.updateFileName = false;

      values.helpers = {};

      values.helpers.capitalize = function(value) {
        return _s.capitalize(value);
      };

      values.helpers.updateFileName = function(sName) {
        var update = values.updateFileName || false;

        if( update ) {
          sName = values.name + _s.capitalize( sName );
        }

        return sName;
      };

      console.log('\n------------------------------------\n');

      Q.all(files.map(function(file) {

        var fileUrl, content;


        fileUrl = path.join( destination, values.name, file.directory, values.helpers.updateFileName( file.name ) );
        console.log( fileUrl );

        content = templateCache[file.templateName](values);
        console.log( content );

        console.log('\n------------------------------------\n');

        return fileUrl;
      }));


      return 'finished...';

    });

}

generate(templates, outputDir, valuesToTpls)
  .then(function(msg) {
    console.log(msg);
  })
  .then(function() {
    console.log('end');
  }, function(error) {
    console.log('error: ' + error);
  });
