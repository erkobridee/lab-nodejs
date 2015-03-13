var requirejs = require('requirejs');

//---

function builder( config ) {

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
  console.log( 'build done' );
  console.log( response );
}

function buildError( error ) {
  console.log( 'build error' );
  console.log( error );
}

//---

module.exports = builder;
