
/**
 * Module dependencies.
 */

var express = require('express')

  , urlCtrl = require('./app/controllers/UrlCtrl')
  , apiCtrl = require('./app/controllers/ApiCtrl')

  , errorHandler = require('./app/errors/errorHandler')
  , ApiError = require('./app/errors/ApiError')

  , http = require('http')
  , path = require('path');

var app = express();

//---------------------------------------------------
// Configuration

app.configure(function(){
  app.set('port', process.env.PORT || 3000);
  app.set('views', path.join(__dirname, 'app', 'views'));
  app.set('view engine', 'jade');
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(express.cookieParser('your secret here'));
  app.use(express.session());
  app.use(app.router);
  app.use(require('stylus').middleware({
    src: path.join(__dirname, 'app', 'views'),
    dest: path.join(__dirname, 'public')
  }));
  app.use(express.static(path.join(__dirname, 'public')));
});
//---------------------------------------------------
// Errors handler

// dev errors handler
app.configure('development', function(){
  // express error handler
  //app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));

  // custom error handler
  app.use(errorHandler({ dumpExceptions: true, showStack: true }));
    // generate log file
  //app.use(errorHandler({ dumpExceptions: true, showStack: true, logErrors: __dirname + '/log/error_log' }));
});

// prod errors handler
app.configure('production', function(){
  // express error handler
  //app.use(express.errorHandler());

  // custom error handler
  app.use(errorHandler());
});

/*
  Errors pages project sample
  https://github.com/visionmedia/express/tree/master/examples/error-pages
*/
// 404 - page not found handler
app.use(function(req, res){
  res.render('error/404', { title: 404, status:404 });
});

//---------------------------------------------------
// Routes

  // API
app.get('/api/json', apiCtrl.list);
app.get('/api/jsonError', apiCtrl.processError);

  // URL
app.get('/', urlCtrl.index);
app.get('/about', urlCtrl.about);
app.get('/persons', urlCtrl.persons);
app.get('/pageError', urlCtrl.pageError);

app.get('/403', urlCtrl.accessNotAllowed);
app.get('/admin', urlCtrl.accessNotAllowed);

app.get('/404', function(req, res, next){
  next();
});

app.get('/500', function(req, res){
  throw new Error('keyboard cat!');
});

//---------------------------------------------------
// server listen port
http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});
