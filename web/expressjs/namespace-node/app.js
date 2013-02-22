
/**
 * Module dependencies.
 */

require('express-namespace');

var express = require('express')
  , routes = require('./routes')
  , user = require('./routes/user')
  , http = require('http')
  , path = require('path') 
;

var app = express();

app.configure(function(){
  app.set('port', process.env.PORT || 3000);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(express.cookieParser('your secret here'));
  app.use(express.session());
  app.use(app.router);
  app.use(require('stylus').middleware(__dirname + '/public'));
  app.use(express.static(path.join(__dirname, 'public')));
});

app.configure('development', function(){
  app.use(express.errorHandler());
});

app.get('/', routes.index);
app.get('/users', user.list);

//-----------------------------------------------------------------------------
app.namespace('/namespace', function() {
  app.get('/', function(req, res) {
    // res.end('namespace default result');
    res.render('result', { 
        title: 'NameSpace Test'
      , message: 'namespace default result'
    });
  });

  app.get('/:id', function(req, res) {
    // res.end('namespace id : ' + req.params.id);
    res.render('result', { 
        title: 'NameSpace Test'
      , message: 'namespace id : ' + req.params.id
    });
  });

  app.get('/:id/view', function(req, res) {
    //res.end('namespace view id : ' + req.params.id);
    res.render('result', { 
        title: 'NameSpace Test'
      , message: 'namespace view id : ' + req.params.id
    });
  });

});
//-----------------------------------------------------------------------------


http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});
