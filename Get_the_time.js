const touchSupported = () => {('ontouchstart' in window || window.DocumentTouch && document instanceof window.DocumentTouch)};
const greetings = age < 18 ? 'You are not old enough' : 'You are young!';