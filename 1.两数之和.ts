/*
 * @lc app=leetcode.cn id=1 lang=typescript
 *
 * [1] 两数之和
 */

// @lc code=start
function twoSum(nums: number[], target: number): number[] {
    const map = {};
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        if (num in map) return [map[num], i];
        map[target - num] = i;
    }
    return [];
}
// @lc code=end
