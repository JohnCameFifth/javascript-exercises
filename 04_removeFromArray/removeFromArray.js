const removeFromArray = function(myArray,number) {
    let index = myArray.indexOf(number); 
    myArray.splice(index, 1);
    return myArray;
};
// Find the index first through the indexOf() function name.
// Do not edit below this line
module.exports = removeFromArray;
