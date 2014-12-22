var http = require("http");

http.createServer(
  function(request, response) {
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.end("Hello Web! \n");
  }
).listen(9000);
// ).listen(1337);
