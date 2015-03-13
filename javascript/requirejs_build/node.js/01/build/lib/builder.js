var requirejs = require('requirejs');

//---

function builder( config ) {

  requirejs.optimize(config, buildResponse, buildError);

}

//---

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
