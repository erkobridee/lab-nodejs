var data = require('prettiest')({ json: __dirname + '/db/hello_world.json' });

if( data.msg ) console.log( data.msg );

data.count = data.count || 0;
data.count++;

data.msg = 'hellow world : ' + data.count;
