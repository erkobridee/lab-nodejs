var Hapi = require('hapi'),
    PORT = 9000;

// Create a server with a host and port
var server = new Hapi.Server();

server.connection({
  port: PORT
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
    reply.file('./public/images/picture.png');
  }
});

// @end: routes
//------------------------------------------------------------------------------

// Start the server
server.start(function () {
  console.log('Server running at port:', server.info.port);
});
