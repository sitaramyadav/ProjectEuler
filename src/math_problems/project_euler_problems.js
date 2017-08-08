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

module.exports = mathematicalProblems;
