/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
    let result = [];
    let map = {'0': 0, '1': 1};
    let carry = 0;
    for (let i = a.length - 1, j = b.length - 1; 0 <= i || 0 <= j; i--, j--) {
        let aIndex = map[a[i]] || 0;
        let bIndex = map[b[j]] || 0;
        let sum = aIndex + bIndex + carry;
        result.push(sum % 2);
        carry = sum > 1 ? 1 : 0;
    }
    if (carry)
        result.push(1);
    return result.reverse().join('');
};

console.log(addBinary('11', '1'));