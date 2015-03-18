var Hapi = require('hapi'),
    PORT = 9000;

//---

// Create a server with a host and port
var server = new Hapi.Server();

server.connection({
  port: PORT
});

//------------------------------------------------------------------------------
// @begin: routes

require('./app')(server);

// @end: routes
//------------------------------------------------------------------------------

// Start the server
server.start(function () {
  console.log('Server running at port:', server.info.port);
});
