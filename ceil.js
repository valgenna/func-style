console.log(1 +  +"2" + "2");
const stringReverse = str => str.split("").reverse().join("");
const isDateValid = (...val) => !Number.isNaN(new Date(...val).valueOf());