const repeatString = function(string, num) {
    let strings = '';
    if (num < 0) {
        return 'ERROR';1
    }
    for (let i = 0; i < num; i++) {
        
        strings = strings + string;
    }
    return strings;
};

// Do not edit below this line
module.exports = repeatString;
