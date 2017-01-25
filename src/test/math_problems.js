var chai = require('chai');
var assert = chai.assert;

var mathematical_problems = require('../math_problems/math_problems.js');

describe('Mathmatical Natural Numbers Problems', function () {

    describe('Multiples of x or y below the specific number', function () {

        it('finds the sum of all the multiples of 3 or 5 below 10', function () {
            let expectedResult = 23;
            let actualResult = mathematical_problems.sumOfMultiplesBetween(3, 5, 1, 10);
            assert.equal(expectedResult, actualResult);
        });

        it('finds the sum of all the multiples of 3 or 5 below 20', function () {
            let expectedResult = 78;
            let actualResult = mathematical_problems.sumOfMultiplesBetween(3, 5, 1, 20);
            assert.equal(expectedResult, actualResult);
        });

        it('finds the sum of all the multiples of 3 or 5 below 1000', function () {
            let expectedResult = 233168;
            let actualResult = mathematical_problems.sumOfMultiplesBetween(3, 5, 1, 1000);
            assert.equal(expectedResult, actualResult);
        });

    });

    describe('Fibonacci sequence', function () {
        var fibonacci = mathematical_problems.fibonacci(4000000);
        it('should not exceed four million', function () {
            assert.ok(fibonacci.lastTerm < 4000000);

        });

        it('find the sum of the even-valued terms.', function () {
            assert.equal(fibonacci.evenSum, 4613732);
        });

    });

    describe('Prime', function () {
        it('should return largest prime factor of the given number number', function () {
            assert.equal(3, mathematical_problems.getLargestPrimeFactor(12));
            assert.equal(7, mathematical_problems.getLargestPrimeFactor(21));
            assert.equal(31, mathematical_problems.getLargestPrimeFactor(31));
            assert.equal(7, mathematical_problems.getLargestPrimeFactor(49));
            assert.equal(6857, mathematical_problems.getLargestPrimeFactor(600851475143));
        });

    });


});
