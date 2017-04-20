var Hapi = require('hapi'),
    path = require('path'),
    PORT = 9000;

// Create a server with a host and port
var server = new Hapi.Server();

server.connection({
  port: PORT,
  routes: {
    files: {
      relativeTo: path.join( __dirname, 'public' )
    }
  }
});

//------------------------------------------------------------------------------
// @begin: routes

server.route({
  method: 'GET',
  path:'/',
  handler: function (request, reply) {
    var indexText = '<pre>' + [
      'hapi.js index',
      '',
      'try:',
      '  /picture',
    ].join('\n') + '</pre>';

   reply(indexText);
  }
});

server.route({
  method: 'GET',
  path: '/picture',
  handler: function (request, reply) {
    reply.file('images/picture.png');
  }
});

server.route({
  method: 'GET',
  path: '/images/{filename}',
  handler: function (request, reply) {
    reply.file('images/' + request.params.filename + '.png');
  }
});

server.route({
  method: 'GET',
  path: '/dir/{param*}',
  handler: {
    directory: {
      path: path.join( __dirname, 'public' ),
      listing: true
    }
  }
});

// @end: routes
//------------------------------------------------------------------------------

// Start the server
server.start(function () {
  console.log('Server running at port:', server.info.port);
});
