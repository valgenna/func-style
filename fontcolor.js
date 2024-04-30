const round = (n, d) => Number(Math.round(n + "e" + d) + "e-" + d);
const average = arr => arr.reduce((a, b) => a + b) / arr.length;
const cookie = name => `; ${document.cookie}`.split(`; ${name}=`).pop().split(';').shift();