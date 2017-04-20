// firstNativeConnectionTest.js
// http://mongodb.github.com/node-mongodb-native/api-articles/nodekoarticle1.html

var mongo = require('mongodb')
  , Db = require('mongodb').Db
  , Server = require('mongodb').Server
  , Connection = require('mongodb').Connection
;

console.log( Connection.DEFAULT_PORT );

var host = 'localhost'
  , port = Connection.DEFAULT_PORT
  , dbName = 'node-test'
;

var db = new Db(dbName, new Server(host, port), {safe: false});

db.open(function(err, db) {
  if(err) { console.log(err); } else {
    console.log('connected');

    db.close();

    console.log('connection closed');
  }
});
