// 07_mysqlTest_Provider.js

//-----------------------------------------------------------------------------

var Provider = (function(){

  var EventEmitter = require('events').EventEmitter
    , mysql = require('mysql')
    , async = require('async')
  ;

  //--- private

  // each operation use one isolated connection
  function dbOperation(provider, callback, sql, params) {
    var client, isConnected = false
      , err, results;

   if(provider.debug) console.log('dbOperation');

    // sync execution
    async.series({
      connect     : function(next) {
        if(provider.debug) console.log('connect');
        
        client = mysql.createConnection(provider.dbconfig);

        client.connect(function(local_err) {
          if(local_err) err = local_err;
          else isConnected = true;
          next();
        });
      },
      execute     : function(next) {
        if(err) next();

        function queryCallback(local_err, rows) {
          if(local_err) err = local_err;
          results = rows;
          next();
        };

        if(provider.debug) console.log('execute query');
        if(provider.debug) console.log(sql);

        if(params) {
          if(provider.debug) console.log(params);
          client.query(sql, params, queryCallback);
        } else {
          if(provider.debug) console.log('no params');
          client.query(sql, queryCallback);
        }
      },
      disconnect  : function(next) {  
        if(provider.debug) console.log('is connected? ' + isConnected);
        if(isConnected) {
          if(provider.debug) console.log('disconnect');
          client.end(function(local_err) {
            if(local_err) err = local_err;
            else client.destroy();
            next();
          });
        } else {
          next();
        }
      },
      end         : function(next) { 
        if(provider.debug) console.log('callback');
        callback(err, results); 
      }
    });
  }

  //--- constructor
  function Provider(table, dbconfig, debug) {
    if(!dbconfig) {
      dbconfig = {
        host     : 'localhost',
        user     : 'root',
        password : '',
        database : 'nodetest'
      };
    }
    //this.debug = debug ? true : false;
    this.debug = false;
    this.dbconfig = dbconfig;
    this.table = table;
  };

  Provider.prototype.__proto__ = EventEmitter.prototype;

  //--- public
  Provider.prototype.findAll = function(callback) {
    var sql = 'SELECT * FROM ' + this.table;

    return dbOperation(this, callback, sql);
  };

  Provider.prototype.findById = function(id, callback) {
    var sql = 'SELECT * FROM ' + this.table + ' WHERE id = ?';

    function localCallback(err, rows) {
      if(err) return callback(err);
      else return callback(null, rows[0]);
    };

    return dbOperation(this, localCallback, sql, id);
  };

  Provider.prototype.insert = function(item, callback) {
    var sql = 'INSERT INTO ' + this.table + ' SET ?';

    return dbOperation(this, callback, sql, item);
  };

  Provider.prototype.update = function(id, item, callback) {
    var sql = 'UPDATE ' + this.table + ' SET ? WHERE id = ?'
      , params = [item, id];
    ;

    return dbOperation(this, callback, sql, params);
  };

  Provider.prototype.remove = function(id, callback) {
    var sql = 'DELETE FROM ' + this.table + ' WHERE id = ?';

    return dbOperation(this, callback, sql, id);
  };

  Provider.prototype.query = function(sql, values, callback) {
    if(typeof values === 'function') {
      callback = values;
      values = null;
    }

    return dbOperation(this, callback, sql, values);
  };
  
  // class definition
  return Provider;
})();

//-----------------------------------------------------------------------------
// tests

var products = new Provider('products')
  , async = require('async')
  , lastId, product
;

function listProducts(doNext) {
  console.log('findAll products');
  products.findAll(function(err, results) {
    console.log('result');
    if(err)  return console.log(err);

    console.log(results);
    return doNext();
  });
};

// sequence serie
// start / insert / list / findById / update / list / delete / list / custom query / end
async.series({
  start: function(next) {
    console.log('-=< START >=-');

    next();
  },
  insert: function(next) {
    console.log('insert product');

    product = {name: 'product by provider', value: 1};

    products.insert(product, function(err, result) {
      console.log('result');
      if(err) return console.log(err); 

      lastId = result.insertId;
      console.log('id: ' + lastId);
      return next();
    });    
  },
  list1: function(next) { listProducts(next); },
  find:  function(next) {
    console.log('findById');
    products.findById(lastId, function(err, result) {
      console.log('result');
      if(err) return console.log(err); 

      product = result;
      console.log(result);
      return next();
    });
  },
  update: function(next) {
    console.log('update');

    var productToUpdate = {
      name: product.name + ' UPDATED',
      value: product.value * parseInt(Math.random() * 10),
      dt: new Date()
    };

    products.update(lastId, productToUpdate, function(err, result) {
      console.log('result');
      if(err) return console.log(err);

      console.log(result);
      return next();
    });
  },
  list2: function(next) { listProducts(next); },
  remove: function(next) {
    console.log('delete');

    products.remove(lastId, function(err, result) {
      console.log('result');
      if(err) return console.log(err);

      console.log(result);
      return next();
    });
  },
  list3: function(next) { listProducts(next); },
  query: function(next) {
    console.log('custom query');

    var sql = 'SELECT NOW() AS now';

    products.query(sql, function(err, result) {
      console.log('result');
      if(err) return console.log(err);

      console.log(result);
      return next();
    });
  },
  end: function(next) {
    console.log('-=< END >=-');    
  }
});
