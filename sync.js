var express = require("express");

var app = express();

app.get('/', function (req, res) {
  res.send("What do you sync?");
});

app.set('port', (process.env.PORT || 5000));
app.listen(app.get('port'), function () {
  console.log("Sync app is running at port:" + app.get('port'));
});
