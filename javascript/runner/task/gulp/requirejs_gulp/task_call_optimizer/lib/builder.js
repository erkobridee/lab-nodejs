var requirejs = require('requirejs');

//---

var DEBUG = false;
var _done;

//---

function builder( config, done, debug ) {
  DEBUG = debug || false;

  _done = done;

  // config.out = outputConsole;
  requirejs.optimize(config, buildResponse, buildError);

}

//---

function outputConsole( text ) {
  console.log('------------------------------------------------------------------');
  console.log( text );
  console.log('------------------------------------------------------------------');
}

function buildResponse( response ) {
  if( DEBUG ) {
    console.log( 'build done' );
    console.log( response );
  }
  _done();
}

function buildError( error ) {
  console.log( 'build error' );
  console.log( error );
  _done();
}

//---

module.exports = builder;
