// classProviderTest.js

/*
  based on:
  http://howtonode.org/express-mongodb
  https://github.com/trucy/mongodb-express-node.js-blog/blob/master/articleprovider-mongodb.js
*/

//-----------------------------------------------------------------------------
var Connection = (function() {

  var EventEmitter = require('events').EventEmitter;

  var Db = require('mongodb').Db
    , Connection = require('mongodb').Connection
    , Server = require('mongodb').Server;

  function DBConnection() {};

  DBConnection.prototype.__proto__ = EventEmitter.prototype;

  DBConnection.prototype.connect = function(host, port, dbname) {
    this.host = host || 'localhost';
    this.port = port || Connection.DEFAULT_PORT;
    this.dbname = dbname || 'node-test';

    console.log(this.host + ':' + this.port + '/' + this.dbname);

    var self = this
      , server = new Server(this.host, this.port, {auto_reconnect: true})
      , options = {safe: false}
    ;

    this.db = new Db(this.dbname, server, options);
    this.db.open(function(err, db) {
      if(err) {
        self.emit('error', err);
      } else {
        self.emit('connected');
      }
    });
  }

  return DBConnection;
})();

//-----------------------------------------------------------------------------
var Provider = (function() {

  var EventEmitter = require('events').EventEmitter;

  //--- private

  function getObjectId(collection, id) {
    if((typeof id) === 'string') {
      id = collection.db.bson_serializer.ObjectID.createFromHexString(id);
    }
    return id;
  };

  //--- constructor
  function Provider(connection, collectionname) {
    this.connection = connection;
    this.collectionname = collectionname;
  };

  Provider.prototype.__proto__ = EventEmitter.prototype;

  //--- public

  // get collection object
  Provider.prototype.getCollection = function(callback) {
    var self = this;

    this.connection.db.collection(this.collectionname, function(error, collection) {
      if( error ) callback(error);
      else callback(null, collection);
    });
  };

  // find all
  Provider.prototype.findAll = function(callback) {
    this.getCollection(function(error, collection) {
      if( error ) callback(error);
      else {
        collection.find().toArray(function(error, results) {
          if( error ) callback(error);
          else callback(null, results);
        });
      }
    });
  };

  // find by id
  Provider.prototype.findById = function(id, callback) {
    this.getCollection(function(error, collection) {
      if( error ) callback(error);
      else {
        var find = {_id: getObjectId(collection, id)};

        collection.findOne(find, function(error, result) {
          if( error ) callback(error);
          else callback(null, result);
        });
      }
    });
  };

  Provider.prototype.insert = function(docs, callback) {
    this.getCollection(function(error, collection) {
      if( error ) callback(error);
      else {
        collection.insert(docs, function(error, docs) {
          if(error) callback(error);
          else callback(null, docs);
        });
      }
    });
  };

  Provider.prototype.update = function(id, doc, callback) {
    this.getCollection(function(error, collection) {
      if( error ) callback(error);
      else {
        var where = {_id: getObjectId(collection, id)};
        collection.update(
          where,
          doc,
          function(error, doc) {
            if( error ) callback(error);
            else callback(null, doc);
        });
      }
    });
  };

  Provider.prototype.delete = function(id, callback) {
    this.getCollection(function(error, collection) {
      if( error ) callback(error);
      else {
        var where = {_id: getObjectId(collection, id)};
        collection.remove(
          where,
          function(error, doc){
            if( error ) callback(error);
            else callback(null, doc);
          });
        }
    });
  };

  // class definition
  return Provider;
})();
//-----------------------------------------------------------------------------

// Tests
console.log('start tests');

var conn = new Connection();
conn.on('error', onErrorHandler);
conn.on('connected', onConnectedHandler);
conn.connect();

function onTestEnd() {
  conn.removeListener('error', onErrorHandler);
  conn.removeListener('connected', onConnectedHandler);
  conn.db.close();

  console.log('end tests');
};

function onErrorHandler(error) {
  console.log(error);

  console.log('onErrorHandler');
};

function onConnectedHandler() {
  console.log('connected to mongodb');

  providerTest();

  //onTestEnd();
};

//---- provider tests

/* 
  https://github.com/caolan/async

  npm install async
*/
var async = require('async');

function providerTest() {
  var provider1 = new Provider(conn, 'mycollection')
    , provider2 = new Provider(conn, 'test')
  ;


  // sync execution
  async.series({
    findAll: function(next) {
      console.log('\nfindAll');
      provider1.findAll(function(error, results) {        
        console.log(results);
        next();
      });
    }

    , crud: function(next) {
      console.log('\ncrud');

      async.waterfall([
        // insert
        function(doNext) {
          console.log('\ninsert');

          var obj = {
            name: 'crud test begin',
            value: Math.random(),
            when: new Date()
          };

          provider2.insert(obj, function(error, doc) {
            var id = doc[0]._id;
            console.log('saved: ' + id);
            doNext(null, id);
          });
        },
        // list
        function(id, doNext) {
          console.log('\nlist');
          provider2.findAll(function(error, results) {
            console.log(results);
            doNext(null, id);
          });
        },
        // find by id
        function(id, doNext) {
          console.log('\nfindById');
          provider2.findById(id, function(error, obj) {
            console.log(obj);
            doNext(null, obj);
          });
        },
        // update
        function(obj, doNext) {
          console.log('\nupdate');
          var id = obj._id;

          delete obj._id;
          obj.name = 'crud test updated';
          obj.value = Math.random();
          obj.when = new Date();

          provider2.update(id, obj, function(error, result) {
            console.log(result);
            doNext(null, id);
          });
        },
        // list
        function(id, doNext) {
          console.log('\nlist');
          provider2.findAll(function(error, results) {
            console.log(results);
            doNext(null, id);
          });
        },
        // delete
        function(id, doNext) {
          console.log('\ndelete');
          provider2.delete(id, function(error, result) {
            console.log(result);
            doNext();
          });
        },
        // list
        function(doNext) {
          console.log('\nlist');
          provider2.findAll(function(error, results) {
            console.log(results);
            next();
          });
        }
      ]);

    }
    , end: function(next) {
      onTestEnd();
    }
  });

};



