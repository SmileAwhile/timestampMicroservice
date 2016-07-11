var express = require('express')
var app = express();

app.get('/', function (req, res) {
  var obj = req.query
  res.send(obj)
});

var port = process.env.PORT || 3000;

app.listen(port);
console.log("listening on port " + port);
