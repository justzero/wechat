var express = require('express');
var app = express();

app.get('/', function(req, res){
  res.send('hello world');
});

app.get('/sign', function(req, res){
  console.log(req.query);
  res.send(req.query.echostr);
});

app.listen(3000, '0.0.0.0');
