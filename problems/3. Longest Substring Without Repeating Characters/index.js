/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    let maxLen = 0;
    let map = {};
    for (let i = 0, last = -1; i < s.length; i++) {
        if (map[s[i]] !== undefined)//最近重复字符位置
            last = Math.max(map[s[i]], last);
        map[s[i]] = i;
        maxLen = Math.max(maxLen, i - last);
    }
    return maxLen;
};

var lengthOfLongestSubstring = function (s) {
    let maxLen = 0;
    let map = new Map();
    for (let i = 0, j = -1; i < s.length; i++) {
        if (map.has(s[i]))
            j = Math.max(map.get(s[i]), j);//最近重复字符位置
        maxLen = Math.max(maxLen, i - j);
        map.set(s[i], i);
    }
    return maxLen;
};

console.log(lengthOfLongestSubstring('a'));
console.log(lengthOfLongestSubstring('abcd'));
console.log(lengthOfLongestSubstring('abcabcbb'));
console.log(lengthOfLongestSubstring('bbbbb'));
console.log(lengthOfLongestSubstring('pwwkew'));
