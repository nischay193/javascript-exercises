const convertToCelsius = function(f) {
  let c = (f - 32) * (5.0 / 9);
  return Math.round(c * 10) / 10;
};

const convertToFahrenheit = function(c) {
  let f = (9.0 / 5) * c + 32;
  return Math.round(f * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
