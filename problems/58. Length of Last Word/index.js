/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
    let count = 0;
    for (let i = s.length - 1; 0 <= i; i--) {
        if (s[i] !== ' ')
            count++;
        else if (count)
            break;
    }
    return count;
};
lengthOfLastWord('Hello World');