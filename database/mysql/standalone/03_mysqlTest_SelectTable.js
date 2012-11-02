// 03_mysqlTest_SelectTable.js
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

function selectTable(tablename) {
  var sql = 'SELECT * FROM ' + tablename;

  client.query(sql, function(err, rows) {
    if(err) {
      console.log(err);
      if(err.code === 'ER_NO_SUCH_TABLE') {
        createTable(tablename);
      }
    } else {
      if(rows.length == 0) {
        insertRow(tablename);
      } else {
        console.log(rows);
        return endMysqlConnection(); 
      }
    }
  });
};

function insertRow(tablename) {
  var obj = {name: 'node.js mysql test', value: 1};
  var sql = 'INSERT INTO ' + tablename + ' SET ?';

  client.query(sql, obj, function(err, rows) {
    if(err) { 
      console.log(err); 
      return endMysqlConnection();      
    } else {
      console.log('inserted');
      console.log(rows); 
      return selectTable(tablename);
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