
var ScreenShooter = require('./lib/ScreenShooter');

//---

var options = {};

/*
var options = {
  parameters: {
    'proxy'      : 'ip_host:port',
    'proxy-auth' : 'user:pass'
  }
};
*/


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
