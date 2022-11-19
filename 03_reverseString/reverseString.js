const reverseString = function(string) {
    
    let splitString = string.split(""); // Split with space " " splits words, "" splits characters.
  
    let reverseString = splitString.reverse().join('');
    return reverseString;
};

// Do not edit below this line
module.exports = reverseString;
