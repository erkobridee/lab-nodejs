
var arguments = process.argv.slice( 2 );

if( arguments.length < 2 ) {
  console.log('Usage: node rasterize.js SOURCE IMAGE_DEST [viewport ex.: 1024x768]');
  process.exit(1);
}

var src = arguments[0];
var dest = arguments[1];
var viewport = arguments[2];

//---


var ScreenShooter = require('./lib/ScreenShooter');

//---

var options = {};

// PROXY_SERVER = ip_host:port
// PROXY_AUTH = user:pass

/*
var options = {
  parameters: {
    'proxy'      : process.env.PROXY_SERVER,
    'proxy-auth' : process.env.PROXY_AUTH
  }
};
*/

if( viewport ) options.viewport = viewport;

//---

var screenshooter = new ScreenShooter();

screenshooter.init(options, takeScreenShot, done);

function takeScreenShot( err ) {
  if( err ) return console.log( err );

  screenshooter.takeScreenShot( src, dest );

}

function done( err, result ) {
  if( err ) return console.log( err );

  console.log( result );
}
