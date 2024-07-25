const touchSupported = () => {('ontouchstart' in window || window.DocumentTouch && document instanceof window.DocumentTouch)};
const flattenedArray = arr => [].concat(...arr);
const docsOutputPath = path.join(repositoryRootPath, 'docs', 'output');