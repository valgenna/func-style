const isAppleDevice = () => /Mac|iPod|iPhone|iPad/.test(navigator.platform);
const value = ( 5 < 7 ) ? "True" : "False" ;
const dayOfYear = (date) => Math.floor((date - new Date(date.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24);