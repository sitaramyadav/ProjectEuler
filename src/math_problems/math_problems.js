var mathematicalProblems = {};

mathematicalProblems.sumOfMultiplesBetween = function (firstNumber, secondNumber, from, to) {
    var sum = 0;
    for (from ; from < to; from++) {
        if (from % firstNumber ==0 || from % secondNumber == 0) {
            sum = sum+from;
        }
    }
    return sum;
};

mathematicalProblems.fibonacci = function (till) {
  var first = 1, second = 1, sum = 0, evenSum = 0;
    while(sum<till){
        sum = first+second;
        first = second;
        second = sum;
        if(sum %2 == 0){
            evenSum += sum;
        }
    }
    return {lastTerm:first,evenSum:evenSum};
};

module.exports = mathematicalProblems;
