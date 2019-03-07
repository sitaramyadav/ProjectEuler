const chai = require('chai');
const assert = chai.assert;

const project_euler_lib = require('../math_problems/project_euler_problems.js');

describe('Mathmatical Problems', function () {

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
        const fibonacci = project_euler_lib.fibonacci(4000000);
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

    describe('Palindrome', function () {

        it('should return product of two no', function () {
            const actual = project_euler_lib.productOf(99, 99);
            assert.equal(99 * 99, actual);
        });

        it('should return true if no is palindrom for numbers', function () {
            const actual = project_euler_lib.isPolindrom(9009);
            assert.equal(true, actual);
        });

        it('should return true if no is palindrom for numbers', function () {
            const actual = project_euler_lib.isPolindrom('CAAC');
            assert.equal(true, actual);
        });

        it('should return largest palindrome made from the product of two 2-digit numbers', function () {
            const expected = 9009;
            const actual = project_euler_lib.palindromBetween(99, 90);
            assert.equal(expected, actual);
        });

        it('should return largest palindrome made from the product of two 3-digit numbers', function () {
            const expected = 906609;
            const actual = project_euler_lib.palindromBetween(999, 900);
            assert.equal(expected, actual);
        });

    });

    describe('IsDivided', function () {

        it('isDivided should return', function () {
            assert.equal(3, project_euler_lib.getLargestPrimeFactor(12));
            assert.equal(7, project_euler_lib.getLargestPrimeFactor(21));
            assert.equal(31, project_euler_lib.getLargestPrimeFactor(31));
            assert.equal(7, project_euler_lib.getLargestPrimeFactor(49));
            assert.equal(6857, project_euler_lib.getLargestPrimeFactor(600851475143));
        });

    });

    describe('Smallest Number', function () {

        it('can be divided by all the numbers between 1 to 10', function () {

            assert.equal(2, project_euler_lib.smallestCommons(1, 2));
            assert.equal(60, project_euler_lib.smallestCommons(2, 5));
            assert.equal(12, project_euler_lib.smallestCommons(1, 4));
            assert.equal(60, project_euler_lib.smallestCommons(1, 5));
            assert.equal(60, project_euler_lib.smallestCommons(1, 6));
            assert.equal(420, project_euler_lib.smallestCommons(1, 7));
            assert.equal(840, project_euler_lib.smallestCommons(1, 8));
            assert.equal(2520, project_euler_lib.smallestCommons(1, 9));
            assert.equal(2520, project_euler_lib.smallestCommons(1, 10));
            assert.equal(232792560, project_euler_lib.smallestCommons(1, 20));
        });
    });
    describe('Difference of Squires of some and some of squire', function () {

        it('Should calculate the some of squires of all the numbers from given range', function () {
            assert.equal(5, project_euler_lib.someOfSquares(1, 2));
            assert.equal(54, project_euler_lib.someOfSquares(2, 5));
            assert.equal(385, project_euler_lib.someOfSquares(1, 10));

        });

        it('Should calculate the some of all the numbers from given range', function () {
            assert.equal(9, project_euler_lib.squireOfTheSomeBetween(1, 2));
            assert.equal(81, project_euler_lib.squireOfTheSomeBetween(2, 4));
            assert.equal(324, project_euler_lib.squireOfTheSomeBetween(3, 6));
            assert.equal(3025, project_euler_lib.squireOfTheSomeBetween(1, 10));

        });

        it('Should calculate the difference between given numbers', function () {
            assert.equal(1, project_euler_lib.difference(1, 2));
            assert.equal(2, project_euler_lib.difference(2, 4));
            assert.equal(3, project_euler_lib.difference(3, 6));
            assert.equal(9, project_euler_lib.difference(1, 10));
            assert.equal(2640, project_euler_lib.difference(project_euler_lib.someOfSquares(1, 10), project_euler_lib.squireOfTheSomeBetween(1, 10)));
            assert.equal(25164150, project_euler_lib.difference(project_euler_lib.someOfSquares(1, 100), project_euler_lib.squireOfTheSomeBetween(1, 100)));

        });
    });
});
