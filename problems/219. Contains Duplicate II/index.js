/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {
    let len = nums.length;
    let hash = new Map();
    for (let i = 0; i < len; i++) {
        if (hash.has(nums[i])) {
            if (i - hash.get(nums[i]) <= k)
                return true;
        }
        hash.set(nums[i], i);
    }
    return false;
};

var containsNearbyDuplicate = function (nums, k) {
    let len = nums.length;
    let hash = {};
    for (let i = 0; i < len; i++) {
        if (hash[nums[i]] !== undefined) {
            if (i - hash[nums[i]] <= k)
                return true;
        }
        hash[nums[i]] = i;
    }
    return false;
};
console.log(containsNearbyDuplicate([1, 2, 3, 1], 3));
console.log(containsNearbyDuplicate([1, 0, 1, 1], 1));
console.log(containsNearbyDuplicate([1, 2, 3, 1, 2, 3], 2));
