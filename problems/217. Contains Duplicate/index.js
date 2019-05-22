/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
    let hash = new Set();
    for (let num of nums) {
        if (hash.has(num))
            return true;
        else
            hash.add(num);
    }
    return false;
};

var containsDuplicate = function(nums) {
    return [...new Set(nums)].length<nums.length;
};

containsDuplicate([1, 2, 3, 4]);