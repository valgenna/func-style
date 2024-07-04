const isDateValid = (...val) => !Number.isNaN(new Date(...val).valueOf());
const copyTextToClipboard = async (text) => { await navigator.clipboard.writeText(text)};
const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1);