const mathematicalProblems = {};

mathematicalProblems.sumOfMultiplesBetween = (firstNumber, secondNumber, from, to) => {
    let sum = 0;
    for (from; from < to; from++) {
        if (from % firstNumber == 0 || from % secondNumber == 0) {
            sum = sum + from;
        }
    }
    return sum;
};

mathematicalProblems.fibonacci = till => {
    let first = 1, second = 1, sum = 0, evenSum = 0;
    while (sum < till) {
        sum = first + second;
        first = second;
        second = sum;
        if (sum % 2 == 0) {
            evenSum += sum;
        }
    }
    return {lastTerm: first, evenSum: evenSum};
};

mathematicalProblems.getLargestPrimeFactor = number => {
    let largestFactor = 2;
    while (largestFactor <= number) {
        if (number % largestFactor == 0) {
            number /= largestFactor;
        } else {
            largestFactor++;
        }
    }
    return largestFactor;
};

mathematicalProblems.isPalindrome = texts => {
    let is_palindrome;
    const texts_ = texts.toString().split('');
    let counter = texts_.length - 1;
    for (i = 0; i < texts_.length / 2; i++) {
        if (!(texts_[i] == texts_[counter])) {
            return false
        }
        else {
            counter--;
            is_palindrome = true;
        }

    }

    return is_palindrome;
};
mathematicalProblems.productOf = (first_no, second_no) => first_no * second_no;


mathematicalProblems.palindromeBetween = (from, to) => {
    for (let i = from; i > to; i--) {
        for (let j = from - 1; j > to; j--) {
            let product_of = mathematicalProblems.productOf(i, j)
            if (mathematicalProblems.isPalindrome(product_of)) {
                return product_of;
            };
        }
    }

};
const smallestCommon = (from, to) => {
    function smallestCommonBetween(low, high) {
        if (high % low === 0) {
            return high;
        } else {
            return smallestCommonBetween(low, to + high);
        }
    }

    return smallestCommonBetween(from, to);
};

mathematicalProblems.smallestCommons = (from, to) => {
    let result = to;
    for (let i = from; i <= to; i++) {
        result = smallestCommon(i, result);
    }
    return result;
};

mathematicalProblems.someOfSquares = (from, to) => {
    let some = 0;
    for (let i = from; i <= to; i++) {
        some += i * i;
    }
    return some;
};


mathematicalProblems.squireOfTheSomeBetween = (from, to) => {
    let some = 0;
    for (let i = from; i <= to; i++) {
        some += i;
    }
    return some * some;
};

mathematicalProblems.difference = (firstNumber, secoundNumber) => Math.abs(firstNumber - secoundNumber);

mathematicalProblems.isPrime = num => {
    for (let i = 2, s = Math.sqrt(num); i <= s; i++)
        if (num % i === 0) return false;
    return num !== 1 && num !== 0;
};

mathematicalProblems.nthPrimeNumber = nth => {
    let primeNumbers = [];
    for (let i = 2; primeNumbers.length != nth; i++) {
        if (mathematicalProblems.isPrime(i)) {
            primeNumbers.push(i)
        }
    }
    return primeNumbers[nth - 1];
};

mathematicalProblems.productOfAll = numbers => {
    const reducer = (accumulator, currentValue) => mathematicalProblems.productOf(accumulator, currentValue);
    return numbers.reduce(reducer);
};

mathematicalProblems.stringNumberToNumbers = (givenNumber, splitter = '') => {
    return givenNumber.split(splitter).map(each => parseInt(each, 10))
};

mathematicalProblems.greatestProductOfAdjacentDigit = (givenNumber, noOfDigit) => {

    let numbers = mathematicalProblems.stringNumberToNumbers(givenNumber, '');

    let startCounter = 0, endCounter = noOfDigit, acc, productOfNumbers, maxProductOfNumbers = 1;

    function increaseCounter() {
        startCounter = startCounter + 1;
        endCounter = endCounter + 1;
    }

    function swapMaxProduct() {
        if (productOfNumbers > maxProductOfNumbers) {
            maxProductOfNumbers = productOfNumbers;
        }
    }

    while (endCounter < 1000 && startCounter < 1000 - noOfDigit) {
        acc = numbers.slice(startCounter, endCounter);
        increaseCounter();
        productOfNumbers = mathematicalProblems.productOfAll(acc);
        swapMaxProduct();
    }

    return maxProductOfNumbers;
};

mathematicalProblems.alterNativeOfGreatestProductOfAdjacentDigit = (givenNumber, noOfDigit) => {

    let numbers = mathematicalProblems.stringNumberToNumbers(givenNumber);
    return numbers.map(function (each, ind, arr) {
        return mathematicalProblems.productOfAll(arr.slice(ind, ind + noOfDigit));
    }).reduce(function (accumulator, currentValue) {
        return accumulator > currentValue ? accumulator : currentValue;
    });
};

mathematicalProblems.sumOfPrimeNumberBelow = (givenNumber) => {
    let sum = 0;
    for (let i = 1; i<givenNumber;i++){
        if(mathematicalProblems.isPrime(i)){
            sum = sum +i;
        }
    }
    return sum;

};

mathematicalProblems.largestProductOfGrid = ( givenNumber ) => {
    let numbers = mathematicalProblems.stringNumberToNumbers(givenNumber, " ");
        // for (let i = 0; i <numbers.length; i=i+20) {
        //
        // }
    let _numbers = {};
    // _number`s['1'] = numbers.slice(0,20);
    // _numbers['2'] = numbers.slice(20, 40);
    // _numbers['3'] = numbers.slice(40, 60);
    // _numbers['4'] = numbers.slice(60, 80);
    // console.log(_numbers);
    console.log(numbers)



    return numbers
};
module.exports = mathematicalProblems;
