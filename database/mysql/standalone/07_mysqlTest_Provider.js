// 07_mysqlTest_Provider.js

//-----------------------------------------------------------------------------

var Connection = (function() {

  var EventEmitter = require('events').EventEmitter
    , mysql = require('mysql')
  ;

  function handleConnectionLost(connection) {
    connection.on('error', function(err) {
      if (!err.fatal) {
        return;
      }

      if (err.code !== 'PROTOCOL_CONNECTION_LOST') {
        throw err;
      }

      console.log('Re-connecting lost connection: ' + err.stack);

      connection = mysql.createConnection(connection.config);
      handleDisconnect(connection);
      connection.connect();
    });
  };

  function DBConnection(options) {
    if(!options) {
      options = {
        host     : 'localhost',
        user     : 'root',
        password : '',
        database : 'nodetest'
      };
    }

    this.isConnected = false;
    this.client = mysql.createConnection(options);

    handleConnectionLost(this.client);
  };

  DBConnection.prototype.__proto__ = EventEmitter.prototype;

  DBConnection.prototype.connect = function(callback) {
    var self = this;
    if(callback) {
      this.client.connect(function(err) {
        if(!err) self.isConnected = true;
        callback(err);
      });
    } else {
      this.client.connect(function(err) {
        if(err) {
          return self.emit('error', err);
        } else {
          self.isConnected = true;
          return self.emit('connected');
        }
      });
    }
  };

  DBConnection.prototype.disconnect = function(callback) {
    var self = this;
    if(callback) {
      self.isConected = false;
      this.client.end(callback);
    } else {
      this.client.end(function(err) {
        if(err) { 
          return self.emit('error', err); 
        } else { 
          self.isConected = false;
          return self.emit('disconnected'); 
        }
      });
    }
  };

  // class definition
  return DBConnection;
})();

//-----------------------------------------------------------------------------

var Provider = (function(){

  var EventEmitter = require('events').EventEmitter
    , async = require('async')
  ;

  //--- private
  function dbOperation(connection, callback, sql, params) {
    var err, results;

    console.log('dbOperation');

    // sync execution
    async.series({
      connect     : function(next) {
        console.log('connect');

        connection.connect(function(local_err) {
          if(local_err) err = local_err;
          next();
        });
      },
      execute     : function(next) {
        console.log('execute');

        if(err) next();

        function queryCallback(local_err, rows) {
          if(local_err) err = local_err;
          results = rows;
          next();
        };

        console.log('do query');
        console.log(sql);
        if(params) {
          console.log(params);
          connection.client.query(sql, params, queryCallback);
        } else {
          console.log('no params');
          connection.client.query(sql, queryCallback);
        }
      },
      disconnect  : function(next) {   
        
        console.log('is connected? ' + connection.isConnected);
        console.log('disconnect');

        if(connection.isConnected) {
          connection.disconnect(function(local_err) {
            if(local_err) err = local_err;
            next();
          });
        } else {
          next();
        }
      },
      end         : function(next) { 
        console.log('callback');
        callback(err, results); 
      }
    });
  }

  //--- constructor
  function Provider(connection, table) {
    this.connection = connection;
    this.table = table;
  };

  Provider.prototype.__proto__ = EventEmitter.prototype;

  //--- public
  Provider.prototype.findAll = function(callback) {
    var sql = 'SELECT * FROM ' + this.table;

    return dbOperation(this.connection, callback, sql);
  };

  Provider.prototype.findById = function(id, callback) {
    var sql = 'SELECT * FROM ' + this.table + ' WHERE id = ?';

    return dbOperation(this.connection, callback, sql, id);
  };

  Provider.prototype.insert = function(item, callback) {
    var sql = 'INSERT INTO ' + this.table + ' SET ?';

    return dbOperation(this.connection, callback, sql, item);
  };

  Provider.prototype.update = function(id, item, callback) {
    var sql = 'DELETE FROM ' + this.table + ' WHERE id = ?'
      , params = [item, id];
    ;

    return dbOperation(this.connection, callback, sql, params);
  };

  Provider.prototype.delete = function(id, callback) {
    var sql = 'DELETE FROM ' + this.table + ' WHERE id = ?';

    return dbOperation(this.connection, callback, sql, id);
  };

  Provider.prototype.query = function(sql, values, callback) {
    if(typeof values === 'function') {
      callback = values;
      values = null;
    }

    return dbOperation(this.connection, callback, sql, values);
  };
  
  // class definition
  return Provider;
})();

//-----------------------------------------------------------------------------

var conn = new Connection()
  , products = new Provider(conn, 'products');
;

console.log('findAll products');
products.findAll(function(err, results) {
  console.log('result');
  if(err) return console.log(err);
  else return console.log(results);
});

// TODO: test the other functions