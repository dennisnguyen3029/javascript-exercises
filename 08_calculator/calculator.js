const add = function(a,b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(array) {
  // 0 is the initial
  // sum is our accumulator
  // current is our current item in the array
	return array.reduce((sum, current) => sum + current, 0);
};

const multiply = function(array) {
  return array.reduce((product, current) => product * current, 1);
};

const power = function(a , b) {
	return Math.pow(a,b)
};

const factorial = function(num) {
	if (num == 0) {
    return 1;
  }
  res = 1;
  for (let i = 1; i <= num; i++) {
    res *= i
  }

  return res;

  
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
