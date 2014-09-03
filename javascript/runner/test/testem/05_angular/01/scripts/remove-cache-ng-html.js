
// http://documentup.com/arturadib/shelljs
require('shelljs/global');

// https://github.com/chevex/yargs
var argv = require('yargs').argv;

//---------------------------------------------------------------------------

var destination = 'cache';

if( argv._.length > 0 ) {
  if(argv._[0]) destination = argv._[0];
}

//---------------------------------------------------------------------------

rm( '-rf', destination );
