const chai = require('chai');
const assert = chai.assert;

const project_euler_lib = require('../math_problems/project_euler_problems.js');

describe('Mathematical Problems', () => {

    describe('Multiples of x or y below the specific number', () => {

        it('finds the sum of all the multiples of 3 or 5 below 10', () => {
            let expectedResult = 23;
            let actualResult = project_euler_lib.sumOfMultiplesBetween(3, 5, 1, 10);
            assert.equal(expectedResult, actualResult);
        });

        it('finds the sum of all the multiples of 3 or 5 below 20', () => {
            let expectedResult = 78;
            let actualResult = project_euler_lib.sumOfMultiplesBetween(3, 5, 1, 20);
            assert.equal(expectedResult, actualResult);
        });

        it('finds the sum of all the multiples of 3 or 5 below 1000', () => {
            let expectedResult = 233168;
            let actualResult = project_euler_lib.sumOfMultiplesBetween(3, 5, 1, 1000);
            assert.equal(expectedResult, actualResult);
        });

    });

    describe('Fibonacci sequence', () => {
        const fibonacci = project_euler_lib.fibonacci(4000000);
        it('should not exceed four million', () => {
            assert.ok(fibonacci.lastTerm < 4000000);

        });

        it('find the sum of the even-valued terms.', () => {
            assert.equal(fibonacci.evenSum, 4613732);
        });

    });

    describe('Prime', () => {

        it('should return largest prime factor of the given number number', () => {
            assert.equal(3, project_euler_lib.getLargestPrimeFactor(12));
            assert.equal(7, project_euler_lib.getLargestPrimeFactor(21));
            assert.equal(31, project_euler_lib.getLargestPrimeFactor(31));
            assert.equal(7, project_euler_lib.getLargestPrimeFactor(49));
            assert.equal(6857, project_euler_lib.getLargestPrimeFactor(600851475143));
        });

    });

    describe('Palindrome', () => {

        it('should return product of two no', () => {
            const actual = project_euler_lib.productOf(99, 99);
            assert.equal(99 * 99, actual);
        });

        it('should return true if no is palindrom for numbers', () => {
            const actual = project_euler_lib.isPalindrome(9009);
            assert.equal(true, actual);
        });

        it('should return true if no is palindrom for numbers', () => {
            const actual = project_euler_lib.isPalindrome('CAAC');
            assert.equal(true, actual);
        });

        it('should return largest palindrome made from the product of two 2-digit numbers', function () {
            const expected = 9009;
            const actual = project_euler_lib.palindromeBetween(99, 90);
            assert.equal(expected, actual);
        });

        it('should return largest palindrome made from the product of two 3-digit numbers', function () {
            const expected = 906609;
            const actual = project_euler_lib.palindromeBetween(999, 900);
            assert.equal(expected, actual);
        });

    });

    describe('IsDivided', () => {

        it('isDivided should return', () => {
            assert.equal(3, project_euler_lib.getLargestPrimeFactor(12));
            assert.equal(7, project_euler_lib.getLargestPrimeFactor(21));
            assert.equal(31, project_euler_lib.getLargestPrimeFactor(31));
            assert.equal(7, project_euler_lib.getLargestPrimeFactor(49));
            assert.equal(6857, project_euler_lib.getLargestPrimeFactor(600851475143));
        });

    });

    describe('Smallest Number', () => {

        it('can be divided by all the numbers between 1 to 10', () => {

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

    describe('Difference of Squires of some and some of squire', () => {

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

    describe('Prime Number', () => {

        it('Should true if number is prime', function () {
            assert.equal(true, project_euler_lib.isPrime(2));
            assert.equal(true, project_euler_lib.isPrime(3));
            assert.equal(true, project_euler_lib.isPrime(5));
            assert.equal(true, project_euler_lib.isPrime(7));
            assert.equal(true, project_euler_lib.isPrime(11));
            assert.equal(true, project_euler_lib.isPrime(13));
            assert.equal(true, project_euler_lib.isPrime(104743));
        });
    });

    describe('Nth Prime Number', () => {

        it('Should give the nth prime number', function () {
            assert.equal(2, project_euler_lib.nthPrimeNumber(1));
            assert.equal(3, project_euler_lib.nthPrimeNumber(2));
            assert.equal(5, project_euler_lib.nthPrimeNumber(3));
            assert.equal(7, project_euler_lib.nthPrimeNumber(4));
            assert.equal(11, project_euler_lib.nthPrimeNumber(5));
            assert.equal(13, project_euler_lib.nthPrimeNumber(6));
            assert.equal(17, project_euler_lib.nthPrimeNumber(7));
            assert.equal(19, project_euler_lib.nthPrimeNumber(8));
            assert.equal(23, project_euler_lib.nthPrimeNumber(9));
            assert.equal(29, project_euler_lib.nthPrimeNumber(10));
            assert.deepEqual(104743, project_euler_lib.nthPrimeNumber(10001));
        })
    });

    describe('Find the products', () => {

        it('Should return the product of given numbers', () => {

            assert.equal(6, project_euler_lib.productOfAll([1, 2, 3]));
            assert.equal(48, project_euler_lib.productOfAll([2, 3, 4, 2]));
            assert.equal(5832, project_euler_lib.productOfAll([9, 9, 8, 9]));
        });
    });

    describe('StringNumber', () => {

        it('Should change into numbers', () => {
            const givenNumber = '73167176531330624';
            assert.deepEqual(
                [7, 3, 1, 6, 7, 1, 7, 6, 5, 3, 1, 3, 3, 0, 6, 2, 4],
                project_euler_lib.stringNumberToNumbers(givenNumber));
        });
    });

    describe('Find the n adjacent digits number in 1000 digit number', () => {

        it('Should return 4 adjacent digit number which have greatest product', () => {
            const givenNumber = '73167176531330624919225119674426574742355349' +
                '194934969835203127745063262395783180169848018694788518438586' +
                '156078911294949545950173795833195285320880551112540698747158' +
                '523863050715693290963295227443043557668966489504452445231617' +
                '318564030987111217223831136222989342338030813533627661428280' +
                '644448664523874930358907296290491560440772390713810515859307' +
                '960866701724271218839987979087922749219016997208880937766572' +
                '733300105336788122023542180975125454059475224352584907711670' +
                '556013604839586446706324415722155397536978179778461740649551' +
                '492908625693219784686224828397224137565705605749026140797296' +
                '865241453510047482166370484403199890008895243450658541227588' +
                '666881164271714799244429282308634656748139191231628245861786' +
                '645835912456652947654568284891288314260769004224219022671055' +
                '626321111109370544217506941658960408071984038509624554443629' +
                '812309878799272442849091888458015616609791913387549920052406' +
                '368991256071760605886116467109405077541002256983155200055935' +
                '72972571636269561882670428252483600823257530420752963450';

            assert.equal(5832, project_euler_lib.greatestProductOfAdjacentDigit(givenNumber, 4));
            assert.equal(23514624000, project_euler_lib.greatestProductOfAdjacentDigit(givenNumber, 13));


            assert.equal(5832, project_euler_lib.alterNativeOfGreatestProductOfAdjacentDigit(givenNumber, 4));
            assert.equal(23514624000, project_euler_lib.alterNativeOfGreatestProductOfAdjacentDigit(givenNumber, 13));
        });
    });

    describe('Sum of Prime Numbers', () => {

        it('should calculate sum of the all the prim number below 10', function () {
            assert.equal(17, project_euler_lib.sumOfPrimeNumberBelow(10));
            assert.equal(142913828922, project_euler_lib.sumOfPrimeNumberBelow(2000000));
        })
    })
});
