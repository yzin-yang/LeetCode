/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
    let left = 0, right = nums.length;
    while (left < right) {
        let mid = left + Math.floor((right - left) / 2);
        if (nums[mid] === target)
            return mid;
        else if (nums[mid] < target)
            left = mid + 1;
        else
            right = mid;
    }
    console.log(left);
    return left;
};

searchInsert([1, 3, 5, 6], 5);
searchInsert([1, 3, 5, 6], 0);
searchInsert([1, 3, 5, 6], 7);
searchInsert([1, 3, 5, 6], 2);
