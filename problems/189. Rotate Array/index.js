/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
/**
 * 双重循环
 * 时间复杂度：O(kn)
 * 空间复杂度：O(1)
 */
var rotate = function (nums, k) {
    let len = nums.length;
    k %= len;
    let item;
    for (let i = 0; i < k; i++) {
        item = nums[len - 1];
        for (let j = len - 1; 0 < j; j--) {
            nums[j] = nums[j - 1];
        }
        nums[0] = item;
    }
};

/**
 * 翻转
 * 时间复杂度：O(n)
 * 空间复杂度：O(1)
 */
var rotate = function (nums, k) {
    function reverse(nums, l, r) {
        while (l < r) {
            let temp = nums[l];
            nums[l++] = nums[r];
            nums[r--] = temp;
        }
    }

    let len = nums.length;
    k %= len;
    reverse(nums, 0, len - 1);
    reverse(nums, 0, k - 1);
    reverse(nums, k, len - 1);
};

var rotate = function (nums, k) {
    let len = nums.length;
    k %= len;
    if (k <= 0) {
        return;
    }

    while (k--) {
        nums.unshift(nums.pop())
    }
};

rotate([1, 2, 3, 4, 5, 6, 7], 3);
rotate([-1, -100, 3, 99], 2);