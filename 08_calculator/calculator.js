const add = function(a, b) {
	return a + b;     
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
	let sum = 0;
  for (let item of arr) sum += item;
  return sum;
};

const multiply = function(arr) {
	let sum = 1;
  for (let item of arr) sum *= item;
  return sum;
};

const power = function(a, b) {
	return a**b;
};

const factorial = function(n) {
	let result = 1;
  for (let i = 1; i <= n; i++) result *= i;
  return result;
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
