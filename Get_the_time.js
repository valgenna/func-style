const capitalizeAllWords = str => str.replace(/\b\w/g, char => char.toUpperCase());
const docsOutputPath = path.join(repositoryRootPath, 'docs', 'output');