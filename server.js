const express = require('express');
const app = express();
const path = require('path');

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'start.html'));
});

app.get('/api/test', function(req, res) {
  var data = {express: 'data from HeRoku!'}
 return res.send(data);
});

app.listen(process.env.PORT || 4000, function(){
    console.log('Your node js server is running');
});