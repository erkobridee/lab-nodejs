// http://strongloop.com/strongblog/promises-in-node-js-with-q-an-alternative-to-callbacks/
// http://documentup.com/kriskowal/q/

var Q = require('q');
var fs = require('fs');

//---

var q_readfile = function(file, encoding) {
  var deferred =  Q.defer();
  fs.readFile(file, encoding, function(err, data) {
    if(err) deferred.reject(err);
    else deferred.resolve(data);
  });
  return deferred.promise;
}

var fs_readfile = Q.denodeify(fs.readFile);

//---

var filename = '../standalone/helloWorld.js';
var fileencode = 'utf-8';

q_readfile(filename, fileencode)
  .then(function result(data) {
    console.log('q_readfile: ', data);
  }, console.err); // onFulfilled, onRejected

//---

fs_readfile(filename, fileencode)
  .then(function result(data) {
    console.log('fs_readfile: ', data);
  }, console.err); // onFulfilled, onRejected

