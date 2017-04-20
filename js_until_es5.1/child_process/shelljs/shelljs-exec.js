var shell = require('shelljs');

var cmdline = 'node --version';

shell.exec( cmdline, {silent:true}, function( code, output ) {
  console.log( code );
  console.log( output );
});
