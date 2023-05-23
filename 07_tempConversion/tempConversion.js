
// Formula: (F - 32) * 0.5556
const ftoc = function(temp) {
  let calculation = (temp - 32) * 0.5556;
  const result = Math.round(calculation * 10) / 10;
  return result;

};

// Formula: (C * 1.8) + 32
const ctof = function(temp) {
  let calculation = (temp * 1.8) + 32;
  const result = Math.round(calculation * 10) / 10;
  return result;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
