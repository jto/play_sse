var http = require("http");

http.createServer(function (req, res) {

  if (req.url === "/") {
    res.writeHead(200, {
      "Content-Type":"text/event-stream",
      'Transfer-Encoding': 'chunked'
    });
    for(i = 0; i < 1000000; i++)
      res.write("data: '0'\n\n");
    res.end();
  } else {
    res.writeHead(404);
    res.end();
  }

}).listen(9001, "127.0.0.1");
console.log("Server running at http://127.0.0.1:9001/");