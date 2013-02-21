http = require "http"

handler = (request, response) ->
  response.writeHead(200, {"Content-Type": "text/plain"})
  response.end "Hello Web! \n"

http.createServer(handler).listen 1337