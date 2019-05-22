/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
    let i = 0;
    for (let num of nums) {
        if (num !== val)
            nums[i++] = num;
    }
    return i;
};

var removeElement = function (nums, val) {//不必保证顺序，且要删除的元素很少时
    let i = 0;
    let j = nums.length - 1;
    while (i <= j) {
        if (nums[i] === val) {
            nums[i] = nums[j];
            j--;
        } else {
            i++;
        }
    }
    return j + 1;
};
console.log(removeElement([3, 2, 2, 3], 3));