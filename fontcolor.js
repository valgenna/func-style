const isDateValid = (...val) => !Number.isNaN(new Date(...val).valueOf());
const results = await Promise.all(resultingPromises);
const merge = (a, b) => [...a, ...b];