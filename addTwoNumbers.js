var express = require('express')
var app = express()

function addTwoNumbers(x, y) {
  return x + y;
}

function dataTest(req, res, next) {
  var data = {express: 'data from HeRoku!'}
  console.log('data Test test starting')
 
  
}

app.use(dataTest())
module.exports = dataTest;