const copyTextToClipboard = async (text) => { await navigator.clipboard.writeText(text)};
const merge = [...new Set([...a, ...b])];
const fahrenheitToCelsius = (fahrenheit) => (fahrenheit - 32) * 5/9;