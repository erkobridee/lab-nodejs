var path  = require('path'),
    Q     = require('q'),
    fs    = require('q-io/fs');

module.exports = function( fileUrl, content ) {

  // create directories tree
  return fs.makeTree( path.dirname( fileUrl ) ).then(function() {
    return fs.write( fileUrl, content ); // write file to disk
  });

};
