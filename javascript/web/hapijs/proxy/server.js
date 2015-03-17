var Hapi = require('hapi'),
    PORT = 9000;

// Create a server with a host and port
var server = new Hapi.Server();

server.connection({
  port: PORT
});

//------------------------------------------------------------------------------
// @begin: mappers

var mapperGitHubUserAPI = function (request, callback) {
    callback(null, 'https://api.github.com/users/' + request.params.user);
};

// @end: mappers
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
      '  /github/{user}',
    ].join('\n') + '</pre>';

   reply(indexText);
  }
});

// http://hapijs.com/api#built-in-handlers
server.route({
    method: 'GET',
    path: '/github/{user}',
    handler: {
      proxy: {
        passThrough: true,
        mapUri: mapperGitHubUserAPI
      }
    }
});

// @end: routes
//------------------------------------------------------------------------------

// Start the server
server.start(function () {
  console.log('Server running at port:', server.info.port);
});
