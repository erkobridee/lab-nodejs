
var args = require('./args');

console.log( JSON.stringify( args, null, 2 ) );

require('./helper1');
require('./helper2');

console.log( 'main.js' );

phantom.exit();
