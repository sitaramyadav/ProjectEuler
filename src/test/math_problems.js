var assert = require('assert');
var mathematical_problems = require('../math_problems/math_problems.js');

describe('Mathmatical Natural Numbers Problems', function() {

  describe('Multiples of x or y below the specific number', function() {

    it('finds the sum of all the multiples of 3 or 5 below 10', function() {
      let expectedResult = 23;
      let actualResult = mathematical_problems.sumOfMultiplesOf(3,5,1,10);
      assert.equal(expectedResult, actualResult);
    });

    it('finds the sum of all the multiples of 3 or 5 below 20', function() {
      let expectedResult = 78;
      let actualResult = mathematical_problems.sumOfMultiplesOf(3,5,1,20);
      assert.equal(expectedResult, actualResult);
    });

    it('finds the sum of all the multiples of 3 or 5 below 1000', function() {
      let expectedResult = 233168;
      let actualResult = mathematical_problems.sumOfMultiplesOf(3,5,1,1000);
      assert.equal(expectedResult, actualResult);
    });

  });

});
