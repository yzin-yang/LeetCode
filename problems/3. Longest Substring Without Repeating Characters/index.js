/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    let maxLen = 0;
    let last = -1;
    let map = {};
    for (let i = 0; i < s.length; i++) {
        if (map[s[i]] !== undefined)//最近重复字符位置
            last = Math.max(map[s[i]], last);
        map[s[i]] = i;
        maxLen = Math.max(maxLen, i - last);
    }
    return maxLen;
};

//时间、空间复杂度都更低
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

lengthOfLongestSubstring('a');
lengthOfLongestSubstring('abcd');
lengthOfLongestSubstring('abcabcbb');
lengthOfLongestSubstring('bbbbb');
lengthOfLongestSubstring('pwwkew');
