var express = require("express");
var os = require('os');
var _ = require('lodash');
var bodyParser = require("body-parser");

var app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', function (req, res) {
  res.send("What do you sync?");
});

var osHandler = function(req, res) {
  res.write("os.hostname() = " + os.hostname() + "\n");
  res.end();
};
var fooHandler = function(req, res) {
  res.write("req.method = " + req.method + "\n");
  res.write("req.url =" + req.url + "\n");
  if (!_.isEmpty(req.query)) {
    res.write("req.query = " + JSON.stringify(req.query) + "\n");
  }
  res.end();
};
var barHandler = function(req, res) {
  res.write("os.hostname() = " + os.hostname() + "\n");
  res.write("req.method = " + req.method + "\n");
  res.write("req.url =" + req.url + "\n");
  res.write("req.query = " + JSON.stringify(req.query) + "\n");
  res.write("req.body = " + JSON.stringify(req.body) + "\n");
  res.end();
};

app.route('/os').all(osHandler);
app.route('/foo').all(fooHandler);
app.route('/bar').all(barHandler);

app.set('port', (process.env.PORT || 5000));
app.listen(app.get('port'), function () {
  console.log("Sync app is running at port:" + app.get('port'));
});
