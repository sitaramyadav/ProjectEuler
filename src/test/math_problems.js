var assert = require('assert');
var chai = require('chai');

var mathematical_problems = require('../math_problems/math_problems.js');

describe('Mathmatical Natural Numbers Problems', function() {

  describe('Multiples of x or y below the specific number', function() {

    it('finds the sum of all the multiples of 3 or 5 below 10', function() {
      let expectedResult = 23;
      let actualResult = mathematical_problems.sumOfMultiplesBetween(3,5,1,10);
      assert.equal(expectedResult, actualResult);
    });

    it('finds the sum of all the multiples of 3 or 5 below 20', function() {
      let expectedResult = 78;
      let actualResult = mathematical_problems.sumOfMultiplesBetween(3,5,1,20);
      assert.equal(expectedResult, actualResult);
    });

    it('finds the sum of all the multiples of 3 or 5 below 1000', function() {
      let expectedResult = 233168;
      let actualResult = mathematical_problems.sumOfMultiplesBetween(3,5,1,1000);
      assert.equal(expectedResult, actualResult);
    });

  });

  describe('Fibonacci sequence', function () {
    var fibonacci = mathematical_problems.fibonacci(4000000);
    it('should not exceed four million', function () {
      assert.ok(fibonacci.lastTerm<4000000);

    });

    it('find the sum of the even-valued terms.', function () {
      assert.equal(fibonacci.evenSum,4613732);
    })
  });

});
