/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
    let hash = new Map();
    let max = 0;
    let index;
    for (let i = 0; i < nums.length; i++) {
        if (hash.has(nums[i]))
            hash.set(nums[i], hash.get(nums[i]) + 1);
        else
            hash.set(nums[i], 1);

        if (max < hash.get(nums[i])) {
            max = hash.get(nums[i]);
            index = nums[i];
        }
    }
    return index;
};

majorityElement([3, 2, 3]);
majorityElement([2, 2, 1, 1, 1, 2, 2]);