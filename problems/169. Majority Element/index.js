/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
    let hash = {};
    for (let i = 0; i < nums.length; i++) {
        if (hash[nums[i]] === undefined)
            hash[nums[i]] = 1;
        else
            hash[nums[i]] += 1;
    }
    let max = 0;
    let index;
    console.log(Object.keys(hash));
    for (let key of Object.keys(hash))
        if (max < hash[key]) {
            max = hash[key];
            index = key;
        }
    console.log(index);
    return index;
};

majorityElement([3, 2, 3]);
majorityElement([2,2,1,1,1,2,2]);