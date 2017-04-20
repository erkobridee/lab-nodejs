
var args = require('yargs').argv;

var flags = {
  proxy: !!args.proxy
}


if( args._.length < 2 ) {
  console.log('Usage: node rasterize.js SOURCE IMAGE_DEST [--viewport=1024x768 --proxy]');
  process.exit(1);
}

var src = args._[0];
var dest = args._[1];

//---

var ScreenShooter = require('./lib/ScreenShooter');

//---

var options = {};

// PROXY_SERVER = ip_host:port
// PROXY_AUTH = user:pass

if( flags.proxy ) {
  options.parameters = options.parameters || {};
  options.parameters['proxy'] = process.env.PROXY_SERVER;
  options.parameters['proxy-auth'] = process.env.PROXY_AUTH;
}

options.viewport = args.viewport || '1024x768';

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
