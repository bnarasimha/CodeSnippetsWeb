var express = require('express');
var app = express();
var port = 80;

app.use(express.static(__dirname + '/app'));
app.listen(port);
console.log('App is listening in port %d', port)