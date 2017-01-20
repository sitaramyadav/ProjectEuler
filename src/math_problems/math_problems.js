var mathematicalProblems = {};

mathematicalProblems.sumOfMultiplesOf = function (firstNumber, secondNumber,from,to) {
    var sum = 0;
    for (from ; from < to; from++) {
        if (from % firstNumber ==0 || from % secondNumber == 0) {
            sum = sum+from;
        }
    }
    console.log( sum + 'ha bhai yahi hai');
    return sum;
};

module.exports = mathematicalProblems;
