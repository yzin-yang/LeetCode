/**
 * @param {string[]} strs
 * @return {string}
 */
//水平扫描法
var longestCommonPrefix = function (strs) {
    if (!strs.length)
        return "";
    let same = strs[0];
    for (let i = 1; i < strs.length && same !== ""; i++) {
        let j = 0;
        while (j < same.length && same[j] === strs[i][j]) {
            j++;
        }
        same = same.slice(0, j);
    }
    return same;
};

//水平扫描法优化
var longestCommonPrefix = function (strs) {
    if (!strs.length)
        return "";
    let same = strs[0];
    for (let i = 0; i < same.length; i++) {
        for (let j = 0; j < strs.length; j++) {
            if (same[i] !== strs[j][i])
                return same.slice(0, i);
        }
    }
    return same;
};

//分治法
var longestCommonPrefix = function (strs) {
    if (!strs.length)
        return "";

    function commonPrefix(lcpLeft, lcpRight) {
        let min = Math.min(lcpLeft.length, lcpRight.length);
        for (let i = 0; i < min; i++) {
            if (lcpLeft[i] !== lcpRight[i])
                return lcpLeft.slice(0, i);
        }
        return lcpLeft.slice(0, min);
    }

    function longest(strs, left, right) {
        if (left === right) {
            return strs[left];
        } else {
            let mid = Math.floor((left + right) / 2);
            let lcpLeft = longest(strs, left, mid);
            let lcpRight = longest(strs, mid + 1, right);
            return commonPrefix(lcpLeft, lcpRight);
        }
    }

    return longest(strs, 0, strs.length - 1);
};

console.log(longestCommonPrefix(["flower", "flow", "flight"]));
console.log(longestCommonPrefix(["dog", "racecar", "car"]));
console.log(longestCommonPrefix(["aa", "a"]));
