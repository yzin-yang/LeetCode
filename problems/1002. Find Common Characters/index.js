/**
 * @param {string[]} A
 * @return {string[]}
 */
var commonChars = function (A) {
    let result = [];
    for (let j = 0; j < A[0].length; j++) {
        let flag = true;
        for (let k = 1; k < A.length; k++) {
            if (A[k].indexOf(A[0].charAt(j)) === -1) {
                flag = false;
                break;
            }
        }
        if (flag) {
            let first = true;
            for (let k = 1; k < A.length; k++) {
                let B = A[k].split('');
                let tmp = B.splice(A[k].indexOf(A[0].charAt(j)), 1);
                A[k] = B.join('');
                if (first) {
                    result.push(tmp[0]);
                    first = false;
                }
            }
        }
    }
    return result;
};

var commonChars = function (A) {
    const getOneWord = function (str) {//统计字符串中个字符出现次数
        var ret = Object.create(null);
        for (let s of str) {
            if (s in ret) {
                ret[s]++
            } else {
                ret[s] = 1
            }
        }
        return ret
    };
    const ret = [];
    var cache = getOneWord(A.shift());//统计第一个字符串中字符出现次数
    var temp;
    for (const str of A) {
        var curr = getOneWord(str);//统计当前字符串中字符出现次数
        temp = Object.create(null);
        Object.keys(cache).forEach(key => {//上一个字符串与当前字符串相同字符，出现次数取较小值
            if (key in curr) {
                temp[key] = Math.min(cache[key], curr[key])
            }
        });
        cache = temp
    }
    //cache为所有字符串中相同字符及最小出现次数。对每个字符，先创建最小出现次数大小的数组，再用该字符填充
    Object.keys(cache).forEach(key => ret.push(...Array(cache[key]).fill(key)));
    return ret
};

commonChars(["bella", "label", "roller"]);
commonChars(["cool", "lock", "cook"]);
