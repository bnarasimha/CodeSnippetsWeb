var express = require('express');
var app = express();

var port = 8080;
if(process.env.NODE_ENV == 'test')
port = 8081;

app.use(express.static(__dirname + '/app'));
app.listen(port);
console.log('App is listening in port %d', port)