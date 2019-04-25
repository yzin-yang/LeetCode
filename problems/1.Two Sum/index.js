/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

 // use map
var twoSum = function(nums, target) {
    let hash = new Map();
    for (let i = 0; i < nums.length; i++) {
        if (hash.get(nums[i]) !== undefined)
            return [hash.get(nums[i]), i];
        hash.set(target - nums[i], i);
    }
};

 //no map 
var twoSum = function(nums, target) {
    let hash = {};
    for (let i = 0; i < nums.length; i++) {
        if (hash[nums[i]] !== undefined)
            return [hash[nums[i]], i];
        hash[target - nums[i]] = i;
    }
};