const convertToCelsius = function(temp) {
  var celsius = (temp - 32) * (5/9);
  return parseFloat(celsius.toFixed(1));
};

const convertToFahrenheit = function(temp) {
  var fahrenheit = (9/5) * temp + 32;
  return parseFloat(fahrenheit.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
