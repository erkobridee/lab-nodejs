var Hapi = require('hapi'),
    PORT = 9000;

// Create a server with a host and port
var server = new Hapi.Server();

server.connection({
  port: PORT
});

// Add the route

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

// Start the server
server.start(function () {
  console.log('Server running at:', server.info.uri);
});
