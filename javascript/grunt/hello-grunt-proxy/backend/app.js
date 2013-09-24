require('express-namespace');

var express = require('express');

var app = module.exports = express(),
    bookmarkCtrl = require('./controllers/BookmarkCtrl');

//---

app.get('/hello.txt', function(req, res){
  var body = 'Hello World';
  res.setHeader('Content-Type', 'text/plain');
  res.setHeader('Content-Length', body.length);
  res.end(body);
});

//---

app.namespace('/api', function() {

  app.get('/', function(req, res) {
    var resources = [
      {name: 'bookmark', url: '/bookmark'}
    ];

    res.json(resources);
  });

  app.get('/bookmarks', bookmarkCtrl.getAll);
  app.get('/bookmarks/:id', bookmarkCtrl.getById);
  app.post('/bookmarks', bookmarkCtrl.insert);
  app.put('/bookmarks/:id', bookmarkCtrl.update);
  app.delete('/bookmarks/:id', bookmarkCtrl.remove);

});
