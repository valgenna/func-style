const touchSupported = () => {('ontouchstart' in window || window.DocumentTouch && document instanceof window.DocumentTouch)};
const merge = Object.assign({}, obj1, obj2);
const greetings = age < 18 ? 'You are not old enough' : 'You are young!';