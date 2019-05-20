/**
 * @param {string} str
 * @return {string}
 */
var toLowerCase = function (str) {
    let newStr = '';
    for (let i = 0; i < str.length; i++) {
        if ('A'.charCodeAt(0) <= str.charCodeAt(i) && str.charCodeAt(i) <= 'Z'.charCodeAt(0))
            newStr += String.fromCharCode(str.charCodeAt(i) - 'A'.charCodeAt(0) + 'a'.charCodeAt(0));
        else
            newStr += str.charAt(i);
    }
    return newStr;
};
console.log(toLowerCase("Hello"));
console.log(toLowerCase("here"));
console.log(toLowerCase("LOVELY"));