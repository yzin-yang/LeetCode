/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
//暴力法 80ms+
var strStr = function (haystack, needle) {
    if (!needle.length)
        return 0;
    for (let i = 0; i < haystack.length; i++) {
        if (haystack.substr(i, needle.length) === needle)
            return i;
    }
    return -1;
};

//暴力法 时间4000ms+
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

//KMP
var strStr = function (haystack, needle) {
    if (!needle.length)
        return 0;
    let i = 0, j = 0;
    let len1 = haystack.length, len2 = needle.length;
    let next = getNext(needle);
    while (i < len1 && j < len2) {
        if (j == -1 || haystack[i] === needle[j]) {
            i++;
            j++;
        } else {
            j = next[j];
        }
    }
    if (j === len2)
        return i - j;
    return -1;
};

function getNext(str) {
    let len = str.length;
    let next = [];
    next.push(-1);
    let i = 0, k = -1;
    while (i < len - 1) {
        if (k === -1 || str[i] === str[k]) {
            i++;
            k++;
            next.push(k);
        } else {
            k = next[k];
        }
    }
    return next;
}

// console.log(strStr('hello', 'll'));
// console.log(strStr('aaaaa', 'bba'));