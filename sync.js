var express = require("express");

var app = express();

app.get('/', function (req, res) {
  res.send("What do you sync?");
});

app.listen(3000);
