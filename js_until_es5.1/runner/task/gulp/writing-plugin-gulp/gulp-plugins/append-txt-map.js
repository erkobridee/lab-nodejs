// through2 is a thin wrapper around node transform streams
var map = require('map-stream');
var gutil = require('gulp-util');
var PluginError = gutil.PluginError;

// Consts
var PLUGIN_NAME = 'gulp-append-text-map-stream';

function appendTextStream( appendText ) {
  var stream = through();
  stream.write( appendText );
  return stream;
}

// Plugin level function(dealing with files)
function gulpAppendText( appendText ) {

  if (!appendText) {
    throw new PluginError(PLUGIN_NAME, 'Missing append text!');
  }
  appendText = new Buffer( appendText ); // allocate ahead of time

  // Creating a stream through which each file will pass
  return map(function(file, cb) {
    if (file.isNull()) {
      // return empty file
      return cb(null, file);
    }
    if (file.isBuffer()) {
      file.contents = Buffer.concat([ file.contents, appendText ]);
    }
    if (file.isStream()) {
      file.contents = file.contents.pipe( appendTextStream( appendText ) );
    }

    return cb(null, file);

  });

}

// Exporting the plugin main function
module.exports = gulpAppendText;
