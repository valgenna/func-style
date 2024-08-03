const dayOfYear = (date) => Math.floor((date - new Date(date.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24);
const appName = getAppName(channel);
const isAppleDevice = /Mac|iPod|iPhone|iPad/.test(navigator.platform);