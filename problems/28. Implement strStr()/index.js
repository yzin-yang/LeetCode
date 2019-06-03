/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
//暴力法
var strStr = function (haystack, needle) {
    if (!needle.length)
        return 0;
    for (let i = 0; i < haystack.length; i++) {
        let j;
        for (j = 0; j < needle.length; j++) {
            if (haystack[i + j] !== needle[j])
                break;
        }
        if (j === needle.length)
            return i;
    }
    return -1;
};

console.log(strStr('hello', 'll'));
console.log(strStr('aaaaa', 'bba'));