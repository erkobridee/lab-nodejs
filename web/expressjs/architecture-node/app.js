
/**
 * Module dependencies.
 */

var express = require('express')

  , urlService = require('./app/service/UrlService')
  , apiService = require('./app/service/ApiService')

  , errorHandler = require('./app/error/errorHandler')
  , ApiError = require('./app/error/ApiError')

  , app = module.exports = express.createServer();

//---------------------------------------------------
// Configuration

app.configure(function(){
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(__dirname + '/public'));
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
  res.render('error/404.jade', { locals: {
    title: 404
  }, status:404 });
});

//---------------------------------------------------
// Routes

  // API
app.get('/api/json', apiService.list);
app.get('/api/jsonError', apiService.processError);

  // URL
app.get('/', urlService.index);
app.get('/about', urlService.about);
app.get('/persons', urlService.persons);
app.get('/pageError', urlService.pageError);

app.get('/403', urlService.accessNotAllowed);
app.get('/admin', urlService.accessNotAllowed);

app.get('/404', function(req, res, next){
  next();
});

app.get('/500', function(req, res){
  throw new Error('keyboard cat!');
});

//---------------------------------------------------
// server listen port
app.listen(3000, function(){
  console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);
});
