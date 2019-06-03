/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    let stack = [];
    let map = {
        ')': '(',
        ']': '[',
        '}': '{',
    };
    for (let i = 0; i < s.length; i++) {
        if (map[s[i]] === undefined) {
            stack.push(s[i]);
        } else if (stack.pop() !== map[s[i]]) {
            return false;
        }
    }
    return !stack.length;
};

console.log(isValid("()"));
console.log(isValid("()[]{}"));
console.log(isValid("(]"));
console.log(isValid("([)]"));
console.log(isValid("{[]}"));