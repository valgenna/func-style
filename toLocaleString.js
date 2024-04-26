const symbolsPath = path.join(buildOutputPath, 'symbols');
const uniqueArr = (arr) => [...new Set(arr)];
const merge = (a, b) => [...a, ...b];
const shuffleArray = (arr) => arr.sort(() => 0.5 - Math.random());
const capitalizeAllWords = str => str.replace(/\b\w/g, char => char.toUpperCase());