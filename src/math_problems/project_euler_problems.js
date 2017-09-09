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
    let is_polindrom = false;
    let texts_ = texts.toString().split('');
    let counter = texts_.length - 1;
    for (i = 0; i < texts_.length / 2; i++) {
        while ((texts_[i] == texts_[counter])) {
            counter--;
            is_polindrom = true;
        }
    }

    return is_polindrom;
}
mathematicalProblems.productOf = function (first_no, second_no) {
    return first_no * second_no;
}


mathematicalProblems.palindromBetween = function (from, to) {
    let polyindroms = [];
    for (let i = from; i > to; i--) {
        for (let j = from - 1; j > to; j--) {
            let product_of = mathematicalProblems.productOf(i, j)
            if (mathematicalProblems.isPolindrom(product_of)) {
                return product_of;
            }
        }
    }

}

module.exports = mathematicalProblems;
