/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function (nums) {
    return nums.sort((a, b) => a - b).reduce((sum, item, index) => (index % 2 === 0 ? sum + item : sum))
};
console.log(arrayPairSum([6214, -2290, 2833, -7908]));