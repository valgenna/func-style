const isWeekend = (date) => [0, 6].indexOf(date.getDay()) !== -1;
const docsOutputPath = path.join(repositoryRootPath, 'docs', 'output');