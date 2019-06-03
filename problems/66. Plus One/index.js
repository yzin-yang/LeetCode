/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
    let len = digits.length - 1;
    let flag = 1;
    for (let i = len; 0 <= i && flag; i--) {
        digits[i]++;
        flag = Math.floor(digits[i] / 10);
        digits[i] %= 10;
    }
    if (flag)
        digits.unshift(1);
    return digits;
};

plusOne([1, 2, 3]);
plusOne([4, 3, 2, 1]);