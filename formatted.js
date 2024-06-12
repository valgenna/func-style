const randomInteger = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
const randomString = () => Math.random().toString(36).slice(2);
const countOccurrences = (arr, element) => arr.filter(item => item === element).length;