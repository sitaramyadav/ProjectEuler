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

        it('should return true if number is prime', function () {
            assert.ok(mathematical_problems.isPrime(2));
            assert.ok(mathematical_problems.isPrime(3));
            assert.ok((!mathematical_problems.isPrime(6)));
            assert.ok(!mathematical_problems.isPrime(8));
            assert.ok(mathematical_problems.isPrime(11));
            assert.ok(mathematical_problems.isPrime(13));
            assert.isNotOk(mathematical_problems.isPrime(4));
            assert.isNotOk(mathematical_problems.isPrime(6));
            assert.isNotOk(mathematical_problems.isPrime(8));
            assert.isNotOk(mathematical_problems.isPrime(10));
            assert.isNotOk(mathematical_problems.isPrime(24));
            assert.isNotOk(mathematical_problems.isPrime(21));
            assert.isNotOk(mathematical_problems.isPrime(36));
            assert.isNotOk(mathematical_problems.isPrime(49));

        });

        it('should give all the factors of the given number', function () {
            assert.deepEqual([1], mathematical_problems.getFactors(1));
            assert.deepEqual([1, 2], mathematical_problems.getFactors(2));
            assert.deepEqual([1, 3], mathematical_problems.getFactors(3));
            assert.deepEqual([1, 2, 4], mathematical_problems.getFactors(4));
            assert.deepEqual([1, 2, 3, 6], mathematical_problems.getFactors(6));
            assert.deepEqual([1, 2, 3, 4, 6, 8, 12, 24], mathematical_problems.getFactors(24));
        });

        it('should give all the prime factors of the given number', function () {
            assert.deepEqual([2], mathematical_problems.getPrimeFactores(2));
            assert.deepEqual([3], mathematical_problems.getPrimeFactores(3));
            assert.deepEqual([2], mathematical_problems.getPrimeFactores(4));
            assert.deepEqual([2, 3], mathematical_problems.getPrimeFactores(6));
            assert.deepEqual([2, 3], mathematical_problems.getPrimeFactores(24));
        });

        it('should return largest prime factor of the given number', function () {
            assert.equal(3, mathematical_problems.getLargestPrimeFactor(6));
            assert.equal(3, mathematical_problems.getLargestPrimeFactor(24));
            assert.equal(7, mathematical_problems.getLargestPrimeFactor(21));
            assert.equal(3, mathematical_problems.getLargestPrimeFactor(24));
        });

        it('should return largest prime factor of the 600851475143 number', function () {
            assert.equal(3, mathematical_problems.getLargestPrimeFactor(600851475143));
        });


    });


});
