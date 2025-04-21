// dp[i]: 以nums[i]结尾的最长递增子序列长度
// dp[i] = max(dp[j])+1 
// dp[x] = 1
function lengthOfLIS(nums: number[]): number {
    if (nums.length === 0) {
        return 0;
    }
    const n = nums.length;
    const dp: number[] = new Array(n).fill(1);
    let maxLen = 1;
    for (let i = 1; i < n; i++) {
        for (let j = 0; j < i; j++) {
            if (nums[i] > nums[j]) {
                dp[i] = Math.max(dp[i], dp[j] + 1);
            }
        }
        if (dp[i] > maxLen) {
            maxLen = dp[i];
        }
    }
    return maxLen;
};

// 贪心+二分
function lengthOfLIS1(nums: number[]): number {
    const n = nums.length;
    if (n === 0) {
        return 0;
    }
    const tails: number[] = [nums[0]];
    for (let i = 1; i < n; i++) {
        if (nums[i] < tails.at(-1)!) {
            let left = 0;
            let right = tails.length - 1;
            while (left <= right) {
                const mid = Math.floor(left + (right - left) / 2)
                if (tails[mid] < nums[i]) {
                    left = mid + 1
                } else {
                    right = mid - 1;
                }
            }
            tails[left] = nums[i];
        } else if (tails.at(-1)! < nums[i]) {
            tails.push(nums[i])
        }
    }
    return tails.length;
};

console.log(lengthOfLIS([4, 10, 4, 3, 8, 9]))
console.log(lengthOfLIS1([4, 10, 4, 3, 8, 9]))

function upperBound(arr: number[], target: number): number {
  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] >= target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return left; // left == right
}
console.log(upperBound([1,2,3],2));