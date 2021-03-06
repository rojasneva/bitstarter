var express = require('express');

var app = express.createServer(express.logger());

var fs = require('fs');

var buf = new Buffer(256);


app.get('/', function(request, response) {
    buf = fs.readFileSync('index.html');
    response.send(buf.toString());
//  response.send('Hello World 2!');
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
