var compression = require('compression');
var express = require('express');
var http = require("http");
var path = require('path');

var server = express();

var PORT = process.env.PORT || 9000;

var app = express();
app.use(compression());

app.use('/', express.static(path.join(__dirname, '/../dist')));

var server = http.createServer(app);
server.listen(PORT);

console.log('Server started, listening at: http://localhost:9000...');
