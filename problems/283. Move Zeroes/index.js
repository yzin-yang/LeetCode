/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {//双指针
    let i = 0;
    for (let num of nums)
        if (num !== 0)
            nums[i++] = num;
    while (i < nums.length)
        nums[i++] = 0;
};

var moveZeroes = function (nums) {//好像也一样
    let zeroCount = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 0)
            zeroCount++;
        else if (zeroCount > 0) {
            nums[i - zeroCount] = nums[i];
            nums[i] = 0;
        }
    }
};

moveZeroes([0, 1, 0, 3, 12]);