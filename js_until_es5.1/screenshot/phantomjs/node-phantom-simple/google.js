var args = require('yargs').argv;

var flags = {
  proxy: !!args.proxy
}

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

//---

var screenshooter = new ScreenShooter();

screenshooter.init(options, takeScreenShot, done);

function takeScreenShot( err ) {
  if( err ) return console.log( err );

  var src  = 'http://google.com',
      dest = 'screen/google.png';

  screenshooter.takeScreenShot( src, dest );

}

function done( err, result ) {
  if( err ) return console.log( err );

  console.log( result );
}
