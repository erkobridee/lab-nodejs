var Hapi = require('hapi'),
    PORT = 9000;

// Create a server with a host and port
var server = new Hapi.Server();

server.connection({
  port: PORT
});

//------------------------------------------------------------------------------

// http://hapijs.com/api#serverdecoratetype-property-method
server.decorate('reply', 'success', function() {
  return this.response({ status: 'ok' });
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
      '  /hello',
      '  /{someWord}'
    ].join('\n') + '</pre>';

   reply(indexText);
  }
});

server.route({
  method: 'GET',
  path:'/hello',
  handler: function (request, reply) {
   reply('hello world');
  }
});

server.route({
    method: 'GET',
    path: '/{name}',
    handler: function (request, reply) {
        reply('Hello, ' + encodeURIComponent(request.params.name) + '!');
    }
});

server.route({
    method: 'GET',
    path: '/ok',
    handler: function (request, reply) {
        reply.success();
    }
});

// @end: routes
//------------------------------------------------------------------------------

// Start the server
server.start(function () {
  console.log('Server running at port:', server.info.port);
});
