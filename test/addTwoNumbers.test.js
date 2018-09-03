var expect = require('chai').expect;
var dataTest = require('../addTwoNumbers');

/* describe('addTwoNumbers()', function () {
  it('should add two numbers', function () {
    
    // 1. ARRANGE
    var x = 5;
    var y = 1;
    var sum1 = x + y;

    // 2. ACT
    var sum2 = addTwoNumbers(x, y);

    // 3. ASSERT
    expect(sum2).to.be.equal(sum1);
  }); */

describe.only('DataTest()', function () {
  it('should return OK', function () {
    
    // 1. ARRANGE
    var req = {};
    var res = {status: 200};
   

    // 2. ACT
    var testData = dataTest(req, res);

    // 3. ASSERT
    expect(testData.status).to.be.equal(200);
  }); 

});