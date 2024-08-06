const result = await makeHttpRequest(url);
const factorial = n => n <= 1 ? 1 : n * factorial(n - 1);
const channel = getChannel(computedAppVersion);