/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
    if (numRows <= 0)
        return [];
    let pre = [1], cur;
    let result = [];
    result.push([1]);
    for (let i = 2; i <= numRows; i++) {
        cur = [];
        for (let j = 0; j < i; j++) {
            let left = pre[j - 1] || 0;
            let right = pre[j] || 0;
            cur.push(left + right);
        }
        result.push(cur);
        pre = cur;
    }
    console.log(result);
    return result;
};

generate(5);