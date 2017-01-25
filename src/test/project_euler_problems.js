var chai = require('chai');
var assert = chai.assert;

var project_euler_lib = require('../math_problems/project_euler_problems.js');

describe('Mathmatical Natural Numbers Problems', function () {

    describe('Multiples of x or y below the specific number', function () {

        it('finds the sum of all the multiples of 3 or 5 below 10', function () {
            let expectedResult = 23;
            let actualResult = project_euler_lib.sumOfMultiplesBetween(3, 5, 1, 10);
            assert.equal(expectedResult, actualResult);
        });

        it('finds the sum of all the multiples of 3 or 5 below 20', function () {
            let expectedResult = 78;
            let actualResult = project_euler_lib.sumOfMultiplesBetween(3, 5, 1, 20);
            assert.equal(expectedResult, actualResult);
        });

        it('finds the sum of all the multiples of 3 or 5 below 1000', function () {
            let expectedResult = 233168;
            let actualResult = project_euler_lib.sumOfMultiplesBetween(3, 5, 1, 1000);
            assert.equal(expectedResult, actualResult);
        });

    });

    describe('Fibonacci sequence', function () {
        var fibonacci = project_euler_lib.fibonacci(4000000);
        it('should not exceed four million', function () {
            assert.ok(fibonacci.lastTerm < 4000000);

        });

        it('find the sum of the even-valued terms.', function () {
            assert.equal(fibonacci.evenSum, 4613732);
        });

    });

    describe('Prime', function () {
        it('should return largest prime factor of the given number number', function () {
            assert.equal(3, project_euler_lib.getLargestPrimeFactor(12));
            assert.equal(7, project_euler_lib.getLargestPrimeFactor(21));
            assert.equal(31, project_euler_lib.getLargestPrimeFactor(31));
            assert.equal(7, project_euler_lib.getLargestPrimeFactor(49));
            assert.equal(6857, project_euler_lib.getLargestPrimeFactor(600851475143));
        });

    });

    describe('Pal', function () {
        it('should return largest prime factor of the given number number', function () {
            assert.equal(3, project_euler_lib.getLargestPrimeFactor(12));
            assert.equal(7, project_euler_lib.getLargestPrimeFactor(21));
            assert.equal(31, project_euler_lib.getLargestPrimeFactor(31));
            assert.equal(7, project_euler_lib.getLargestPrimeFactor(49));
            assert.equal(6857, project_euler_lib.getLargestPrimeFactor(600851475143));
        });

    });


});
