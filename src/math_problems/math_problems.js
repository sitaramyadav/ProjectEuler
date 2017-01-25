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

mathematicalProblems.isPrime = function(number) {
    var start = 2;
    while (start <= Math.sqrt(number)) {
        if (number % start++ < 1) return false;
    }
    return number > 1;
};

mathematicalProblems.getFactors = function(number){
    let factors = [];
  for(var i =0;i <=number;i++){
      if(number%i==0)
          factors.push(i);
  };
  return factors;
};

mathematicalProblems.getPrimeFactores = function (number) {
    var factores = mathematicalProblems.getFactors(number);
    return factores.filter(function (each) {
            if(mathematicalProblems.isPrime(each)) return each;
    });
};

mathematicalProblems.getLargestPrimeFactor = function (number) {
    var primeFactores = mathematicalProblems.getPrimeFactores(number);
    return primeFactores[primeFactores.length-1];

};

module.exports = mathematicalProblems;
