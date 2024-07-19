const merge = [...new Set(a.concat(b))];
const cookie = name => `; ${document.cookie}`.split(`; ${name}=`).pop().split(';').shift();