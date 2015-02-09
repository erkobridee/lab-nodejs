var fs = require('fs'),
    path = require('path'),
    xml2js = require('xml2js');

var parser = new xml2js.Parser();

var xmlPath = path.join(__dirname, 'src', 'livetpls.xml');

fs.readFile(xmlPath, function(err, data) {

  parser.parseString(data, function (err, result) {

    console.log( JSON.stringify( result, null, 2 ) );
    console.log('Done');

  });

});
