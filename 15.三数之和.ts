/*
 * @lc app=leetcode.cn id=15 lang=typescript
 *
 * [15] 三数之和
 */

// @lc code=start
function threeSum(nums: number[]): number[][] {
    interface TwoMap {
        [x: number]: number;
    }
    const twoMap: TwoMap = {};
    for (let i = 0; i < nums.length; i++) {
        twoMap[-nums[i]] = i;
    }
    const res:any = [];
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (
                nums[i] + nums[j] in twoMap &&
                twoMap[nums[i] + nums[j]] > j &&
                res.every((val: number[]) => {
                    return (
                        !val.includes(nums[i]) ||
                        !val.includes(nums[j]) ||
                        !val.includes(-(nums[i] + nums[j]))
                    );
                })
            ) {
                res.push([nums[i], nums[j], -(nums[i] + nums[j])]);
            }
        }
    }
    return res;
}
console.error(threeSum([-1, 0, 1, 2, -1, -4]));
console.error(threeSum([]));
console.error(threeSum([0]));
// @lc code=end
