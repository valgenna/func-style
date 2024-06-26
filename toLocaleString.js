const merge = [...new Set(a.concat(b))];
const celsiusToFahrenheit = (celsius) => celsius * 9/5 + 32;
const removeDuplicates = (arr) => [...new Set(arr)];