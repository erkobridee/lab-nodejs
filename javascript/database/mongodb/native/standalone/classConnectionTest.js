// classConnectionTest.js

var Persistence = (function() {

  //--- dependencies
  var EventEmitter = require('events').EventEmitter
    , mongo = require('mongodb')
    , Db = require('mongodb').Db
    , Server = require('mongodb').Server
    , Connection = require('mongodb').Connection
  ;

  //--- private functions

  //---
  function Persistence() {}

  Persistence.CONST = {
      CONNECTION_EVENT: 'connectionEvent'
    , CONNECTION_ERROR_EVENT: 'connectionErrorEvent'
    , DISCONNECTION_EVENT: 'disconnectionEvent'
    , COLLECTION_EVENT: 'collectionEvent'
    , COLLECTION_ERROR_EVENT: 'collectionErrorEvent'
  }

  Persistence.prototype.__proto__ = EventEmitter.prototype;

  Persistence.prototype.db = {
      host: 'localhost'
    , port: 0
    , name: 'note-test'
    , ref: null
    , conn: null
  }

  //--- public functions
  Persistence.prototype.init = function(host, port, name) {
    var self = this;

    self.db.host = host || 'localhost';
    self.db.port = port || Connection.DEFAULT_PORT;
    self.db.name = name || 'node-test';

    self.db.ref = new Db(self.db.name, new Server(self.db.host, self.db.port), {safe: false});
  }

  Persistence.prototype.connect = function() {
    var self = this;

    if(!self.db.conn) {
      self.db.ref.open(function(err, db) {
        if(!err) {
          self.db.conn = db;
          self.emit(Persistence.CONST.CONNECTION_EVENT);
        } else {
          self.emit(Persistence.CONST.CONNECTION_ERROR_EVENT, err);
        }
      });
    }
  };

  Persistence.prototype.disconnect = function() {
    var self = this;

    if(self.db.conn) {
      self.db.conn.close();
      self.emit(Persistence.CONST.DISCONNECTION_EVENT);
    }
  }

  Persistence.prototype.getCollection = function(name, successEventName, errorEventName) {
    var self = this;
    
    self.db.conn.collection(name, function(err, collection) {
      if(err) {
        self.emit((errorEventName || Persistence.CONST.COLLECTION_ERROR_EVENT), err);
      } else {
        self.emit((successEventName || Persistence.CONST.COLLECTION_EVENT), collection);
      }
    });
  }

  Persistence.prototype.collection = function(name, callback) {
    var self = this;
    
    self.db.conn.collection(name, function(err, collection) {
      if(err) {
        self.emit(Persistence.CONST.COLLECTION_ERROR_EVENT, err);
      } else {
        callback(collection);
      }
    });
  }



  // return class definition
  return Persistence;
})();

//-----------------------------------------------------------------------------

var p = new Persistence();

p.on('doDisconnectEvent', doDisconnect);

p.on(Persistence.CONST.CONNECTION_EVENT, onConnect);
p.on(Persistence.CONST.DISCONNECTION_EVENT, onDisconnect);
p.on(Persistence.CONST.CONNECTION_ERROR_EVENT, onConnectionError);

p.init();
p.connect();

//-----------------------------------------------------------------------------
function onEnd() {
  p.removeListener('doDisconnectEvent', doDisconnect);

  p.removeListener(Persistence.CONST.CONNECTION_EVENT, onConnect);
  p.removeListener(Persistence.CONST.DISCONNECTION_EVENT, onDisconnect);
  p.removeListener(Persistence.CONST.CONNECTION_ERROR_EVENT, onConnectionError);

  console.log('end');
}

function onConnectionError(err) {
  console.log(err);
  onEnd();
}

function onConnect() {
  console.log('start');

  p.on(Persistence.CONST.COLLECTION_EVENT, onCollection);
  p.getCollection('mycollection');
}

function onDisconnect() {
  onEnd();
}

function onCollection(collection) {
  p.removeListener(Persistence.CONST.COLLECTION_EVENT, onCollection);

  var docs = createObjArr();

  collection.insert(docs, {safe: false}, function(err, result) {
    if(err) {
      console.log(err);
    } else {
      console.log('mycollection : inserted');
      console.log(result);
    }
  });

  //p.emit('doDisconnectEvent');
  p.collection('test', collectionSelected);
}

function doDisconnect() {
  // call db disconnection
  p.disconnect();
}

//---

function createObjArr() {
  var i
    , len = 10
    , arr = [];

  for(i = 1; i <= len; i++) {
    arr.push(createObj(i));
  }

  return arr;
}

function createObj(idx) {

  var obj = {
      name: 'name ' + idx
    , value: idx
    , when: new Date()
  }

  return obj;
}

//-----------------------------------------------------------------------------

function collectionSelected(collection) {

  collection.insert(createObj(1000), {safe: false}, function(err, result) {
    if(err) {
      console.log(err);
    } else {
      console.log('test : inserted');
      console.log(result[0]);
    }
  });

  p.emit('doDisconnectEvent');
}

//-----------------------------------------------------------------------------


