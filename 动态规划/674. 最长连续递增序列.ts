// dp[i]: 以 nums[i] 结尾的最长连续递增序列长度
// dp[i] = nums[i] > nums[i-1] ? dp[i-1] + 1 : 1
// dp[0] = 1
function findLengthOfLCIS(nums: number[]): number {
    const n = nums.length;
    if (n < 2) {
        return n;
    }
    const dp: number[] = [1];
    for (let i = 1; i < n; i++) {
        dp[i] = nums[i] > nums[i - 1] ? dp[i - 1] + 1 : 1
    }

    return Math.max(...dp);
};

function findLengthOfLCIS1(nums: number[]): number {
    const n = nums.length;
    let maxLen = 0;
    let start = 0;
    for (let i = 0; i < n; i++) {
        if (0 < i && nums[i] <= nums[i - 1]) {
            start = i;
        }
        maxLen = Math.max(maxLen, i - start + 1);
    }
    return maxLen;
};

console.log(findLengthOfLCIS([1, 3, 5, 4, 7]));
console.log(findLengthOfLCIS1([1, 3, 5, 4, 7]));
console.log(findLengthOfLCIS1([1]));