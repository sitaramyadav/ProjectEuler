const mathematicalProblems = {};

mathematicalProblems.sumOfMultiplesBetween = function (firstNumber, secondNumber, from, to) {
    let sum = 0;
    for (from; from < to; from++) {
        if (from % firstNumber == 0 || from % secondNumber == 0) {
            sum = sum + from;
        }
    }
    return sum;
};

mathematicalProblems.fibonacci = function (till) {
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

mathematicalProblems.getLargestPrimeFactor = function (number) {
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

mathematicalProblems.isPolindrom = function (texts) {
    let is_polindrom;
    let texts_ = texts.toString().split('');
    let counter = texts_.length - 1;
    for (i = 0; i < texts_.length / 2; i++) {
        if (!(texts_[i] == texts_[counter])) {
            return false
        }
        else {
            counter--;
            is_polindrom = true;
        }

    }

    return is_polindrom;
};
mathematicalProblems.productOf = function (first_no, second_no) {
    return first_no * second_no;
};


mathematicalProblems.palindromBetween = function (from, to) {
    for (let i = from; i > to; i--) {
        for (let j = from - 1; j > to; j--) {
            let product_of = mathematicalProblems.productOf(i, j)
            if (mathematicalProblems.isPolindrom(product_of)) {
                return product_of;
            }
            ;
        }
        ;
    }
    ;

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

mathematicalProblems.smallestCommons = function (from, to) {
    let result = to;
    for (let i = from; i <= to; i++) {
        result = smallestCommon(i, result);
    }
    ;
    return result;
};

mathematicalProblems.someOfSquares = function (from, to) {
    let some = 0;
    for (let i = from; i <= to; i++) {
        some += i * i;
    }
    return some;
};


mathematicalProblems.squireOfTheSomeBetween = function (from, to) {
    let some = 0;
    for (let i = from; i <= to; i++) {
        some += i;
    }
    return some * some;
};

mathematicalProblems.difference = function (firstNumber, secoundNumber) {
    return Math.abs(firstNumber - secoundNumber);
};

mathematicalProblems.isPrime = num => {
    for (let i = 2, s = Math.sqrt(num); i <= s; i++)
        if (num % i === 0) return false;
    return num !== 1 && num !== 0;
};

mathematicalProblems.nthPrimeNumber = function (nth) {
    let primeNumbers = [];
    for (let i = 2; primeNumbers.length != nth; i++) {
        if (mathematicalProblems.isPrime(i)) {
            primeNumbers.push(i)
        }
    }
    return primeNumbers[nth - 1];
};

mathematicalProblems.productOfAll = function (numbers) {
    const reducer = (accumulator, currentValue) => mathematicalProblems.productOf(accumulator, currentValue);
    return numbers.reduce(reducer);
};

mathematicalProblems.stringNumberToNumbers = function(givenNumber) {
    return givenNumber.split('').map(function (each) {
        return parseInt(each, 10);

    });
}

mathematicalProblems.greatestProductOfAdjacentDigit = function (givenNumber, noOfDigit) {

    let numbers = mathematicalProblems.stringNumberToNumbers(givenNumber);

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
module.exports = mathematicalProblems;
