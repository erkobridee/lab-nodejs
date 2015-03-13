// The simplest script: keeps track of how many
// times it has been run. It's like magic!

var data = require('prettiest')({ json: __dirname + '/db/count.json' });

data.count = data.count || 0;
data.count++;
console.log('I have been run ' + data.count + ' times.');
