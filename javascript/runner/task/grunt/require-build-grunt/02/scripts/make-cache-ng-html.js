
// http://documentup.com/arturadib/shelljs
require('shelljs/global');

var fs = require('fs');
var path = require('path');
var html2js = require('../helpers/lib/html2js/simpleCompileTemplate');

// https://github.com/chevex/yargs
var argv = require('yargs').argv;

//---------------------------------------------------------------------------

var source = 'src';
var destination = 'cache';

if( argv._.length > 0 ) {
  if(argv._[0]) source = argv._[0];
  if(argv._[1]) destination = argv._[1];
}

//---------------------------------------------------------------------------

var html_regexp = /\.html$/;

//---------------------------------------------------------------------------

echo('\ncreating templates cache for angular');

function processFile(file) {
  var moduleName = null;

  var content = fs.readFileSync( file, 'UTF-8' );
  var inputAlias = file.replace( source + path.sep, '' );

  var outputFile = inputAlias.split( path.sep ).join( '-' );
  outputFile +=  '.js';
  outputFile = path.join( destination, outputFile );
  //console.log( outputFile );

  inputAlias = inputAlias.replace(/\\/g, '/');
  var output = html2js(inputAlias, content, moduleName);

  if (outputFile) {
    fs.writeFileSync(outputFile, output, 'utf8');
  } else {
    console.log(output);
  }
}

function checkOutputDir(checkDir, cb) {
  fs.exists(checkDir, function (exists) {
    if(!exists) {
      fs.mkdirSync(checkDir);
      cb();
    } else {
      cb();
    }
  });
}

checkOutputDir(destination, function() {
  find(source)
    .filter(function(file) { return file.match(html_regexp); })
    .forEach(function(file) {
      processFile(file);
    });

  echo('\nOK!');
});

//---------------------------------------------------------------------------
