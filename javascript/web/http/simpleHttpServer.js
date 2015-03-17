var http = require("http"),
    port = 9000;

http.createServer(
  function(request, response) {
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.end("Hello Web! \n");
  }
).listen( port );

console.log('Server running at http://127.0.0.1:' + port + '/');
