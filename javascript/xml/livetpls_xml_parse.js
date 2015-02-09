var fs = require('fs'),
    path = require('path'),
    Q = require('q'),
    xml2js = require('xml2js');

var parser = new xml2js.Parser();

var fs_readfile = Q.denodeify( fs.readFile );
var parseString = Q.denodeify( parser.parseString );

var xmlPath = path.join(__dirname, 'src', 'livetpls.xml');

//---

function processXml( xmlPath, tplGroupName, lang ) {
  return fs_readfile( xmlPath )
    .then(function fileContent( content ) {
      return parseString( content );
    })
    .then(function processXML( xml ) {
      return processLivetpls( xml, tplGroupName, lang );
    });
}

//---

function processLivetpls( xml, tplGroupName, lang ) {

  var output = '';

  var templateSet = xml.templateSet;

  output += '## ' + tplGroupName + '\n';
  output += '> templateSet group name: ' + templateSet.$.group + '\n';

  for (var i = templateSet.template.length - 1; i >= 0; i--) {
    output += processTemplate( templateSet.template[i], lang );
  };

  return output;

}

function processTemplate( template, lang ) {
  var output = '';

  output += '`' + template.$.name + '` - ' + template.$.description + '\n';
  output += '```'+ lang;
  output += template.$.value;
  output += '```\n';

  return output;
}

//==============================================================================

processXml( xmlPath, 'Require.js', 'JavaScript' )
  .then(function result( markdown ) {
    console.log( markdown );
    console.log('');
    console.log('done');
  });


