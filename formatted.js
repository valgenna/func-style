const minNumber = arr => Math.min(...arr);
const copyTextToClipboard = async (text) => { await navigator.clipboard.writeText(text)};