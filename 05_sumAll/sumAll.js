const sumAll = function(firstNum, secondNum) {
    let sum = 0;

    if (typeof firstNum != "number" || typeof secondNum != "number" ) {
        return "ERROR";
    }
    if (firstNum < 0 || secondNum < 0) {
        return "ERROR";
    }
    if (firstNum > secondNum) {
        for (let i = secondNum; i <= firstNum; i++) {
            sum = sum + i;
        }
        return sum;
    }
    for (let i = firstNum; i <= secondNum; i++) {
        sum = sum + i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
