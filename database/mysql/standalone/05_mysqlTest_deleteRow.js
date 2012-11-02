// 05_mysqlTest_deleteRow.js
var mysql = require('mysql')
  , client = mysql.createConnection({
      host     : 'localhost',
      user     : 'root',
      password : ''
    })
  , database = 'nodetest'
  , table = 'products'
;

function createDB(dbname) {
  var sql = 'CREATE DATABASE ' + dbname;
  client.query(sql, function(err, rows) {
    if(err) {
      console.log(err);
      return endMysqlConnection();
    } else {
      console.log('database ' + dbname + ' created');
      return tryConnectDB(dbname);
    }
  });
};

function tryConnectDB(dbname) {
  var sql = 'USE ' + dbname;
  client.query(sql, function(err, rows) {
    if(err) {
      //console.log(err);
      if(err.code = 'ER_BAD_DB_ERROR') {
        createDB(dbname);
      }
    } else {
      console.log('ok'); //console.log(rows);

      return selectTable(table);
    }
  });
};

function createTable(tablename) {
  var sql = 'CREATE TABLE ' + tablename + ' ( '; 
  sql += 'id INT NOT NULL AUTO_INCREMENT, ';
  sql += 'name VARCHAR(255) NOT NULL, ';
  sql += 'value INT DEFAULT 0, ';
  sql += 'dt TIMESTAMP DEFAULT CURRENT_TIMESTAMP, ';
  sql += 'PRIMARY KEY ( id ) ';
  sql += ' )';

  console.log(sql);

  client.query(sql, function(err, rows) {
    if(err) {
      console.log(err);
      endMysqlConnection();
    } else {
      console.log('table ' + tablename + ' created');
      console.log(rows);
      return selectTable(tablename);
    }
  });
};

function selectTable(tablename, cmd, id) {
  var sql = 'SELECT * FROM ' + tablename;

  client.query(sql, function(err, rows) {
    if(err) {
      console.log(err);
      if(err.code === 'ER_NO_SUCH_TABLE') {
        createTable(tablename);
      }
    } else {
      var len = rows.length;
      if(!cmd && len < 2) {
        insertRow(tablename, len);
      } else {
        console.log(rows);

        if(!cmd || cmd === 'continue') {
          return updateRow(tablename, id, len);
        } else if(cmd === 'delete') {
          return deleteRow(tablename, id);
        } else if(cmd === 'stop' || len === 2) {
          return endMysqlConnection(); 
        }
      }
    }
  });
};

function insertRow(tablename, count) {
  var obj = {name: 'node.js mysql test', value: (count+1)};
  var sql = 'INSERT INTO ' + tablename + ' SET ?';

  client.query(sql, obj, function(err, result) {
    if(err) { 
      console.log(err); 
      return endMysqlConnection();
    } else {
      console.log('inserted');
      var id = result.insertId;
      console.log(id); 
      return selectTable(tablename, null, id);
    }
  });
};

function findRowById(tablename, id, callback) {
  var sql = 'SELECT * FROM ' + tablename + ' WHERE id = ?';

  client.query(sql, id, function(err, rows) {
    if(err) {
      console.log(err);
      return endMysqlConnection();      
    } else {
      return callback(rows[0]);
    }
  });
};

function findFisrtRow(tablename, callback) {
  var sql = 'SELECT * FROM ' + tablename + ' LIMIT 0,1';

  client.query(sql, function(err, rows) {
    if(err) {
      console.log(err);
      return endMysqlConnection();      
    } else {
      return callback(rows[0]);
    }
  });
};

function updateRow(tablename, id, len) {   
  function resultCallback(result) {
    console.log('find');
    console.log(result);

    var sql = 'UPDATE ' + tablename + ' SET ? WHERE ?';

    var setValues = {
      name: result.name + ' UPDATED',
      value: result.value * 2,
      dt: new Date()
    };
    var where = {id: result.id};

    var updateValues = [setValues, where];

    client.query(sql, updateValues, function(err, rows) {
      if(err) {
        console.log(err);
        return endMysqlConnection();
      } else {
        console.log('updated');
        
        var cmd = 'continue';

        if(len == 2) cmd = 'delete'

        return selectTable(tablename, cmd, result.id);
      }
    });
  };
  
  if(id) return findRowById(tablename, id, resultCallback);
  else return findFisrtRow(tablename, resultCallback);
};

function deleteRow(tablename, id) {
  var sql = 'DELETE FROM ' + tablename + ' WHERE id = ?';

  client.query(sql, id, function(err, result) {
    if(err) {
        console.log(err);
        return endMysqlConnection();
      } else {
        console.log('deleted');
        return selectTable(tablename, 'stop');
      }
  });
};

function endMysqlConnection() {
  client.end(function(err) {
    if(err) return console.log(err);
    
    console.log('disconnected');
  });
};

client.connect(function(err) {
  if(err) return console.log(err);
  
  console.log('connect');
  tryConnectDB(database);
});