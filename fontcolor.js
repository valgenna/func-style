const merge = (a, b) => [...a, ...b];
const apmRootPath = path.join(repositoryRootPath, 'apm');
const touchSupported = () => {('ontouchstart' in window || window.DocumentTouch && document instanceof window.DocumentTouch)};