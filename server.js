const express = require('express');
const app = express();
const path = require('path');

// data
var ngosData = require("./data/ngos.json");

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'start.html'));
});

app.get('/ok', function (req, res) {
  res.status(200).send('ok');
});

app.get('/api/test', function(req, res) {
  var data = {express: 'data from HeRoku!'}
 return res.status(200).send(data);
});

app.get('/api/data', function(req, res, test) {
  var data = {express: 'data from HeRoku!'}
  return res.status(200).send(data);
});

// NGOs
app.get('/api/ngos', function(req, res, test) {
  var data = {express: 'data from HeRoku!'}
  return  res.json(ngosData);
});
var server = app.listen(3000, function () {
  var port = server.address().port;
  console.log('Example app listening at port %s', port);
});
module.exports = server;