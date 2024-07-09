const removeDuplicates = (arr) => [...new Set(arr)];
const stripHtml = html => (new DOMParser().parseFromString(html, 'text/html')).body.textContent || '';
const isWeekday = (date) => date.getDay() % 6 !== 0;