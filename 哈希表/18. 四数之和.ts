function fourSum(nums: number[], target: number): number[][] {
    const n = nums.length;
    nums.sort((a, b) => a - b);
    const res: number[][] = [];
    for (let i = 0; i < n - 3; i++) {
        // 提前终止条件1
        const minSum1 = nums[i] + nums[i + 1] + nums[i + 2] + nums[i + 3];
        if (minSum1 > target) {
            break;
        }
        // 提前终止条件2
        const maxSum1 = nums[i] + nums[n - 3] + nums[n - 2] + nums[n - 1];
        if (maxSum1 < target) {
            continue;
        }
        if (i > 0 && nums[i] === nums[i - 1]) {
            continue;
        }
        for (let j = i + 1; j < n - 2; j++) {
            if (j > i + 1 && nums[j] === nums[j - 1]) {
                continue;
            }
            // 提前终止条件3
            const minSum2 = nums[i] + nums[j] + nums[j + 1] + nums[j + 2];
            if (minSum2 > target) {
                break;
            }
            // 提前终止条件4
            const maxSum2 = nums[i] + nums[j] + nums[n - 2] + nums[n - 1];
            if (maxSum2 < target) {
                continue;
            }
            const twoTarget = target - nums[i] - nums[j];
            let left = j + 1;
            let right = n - 1;
            while (left < right) {
                const sum = nums[left] + nums[right];
                if (sum < twoTarget) {
                    left++;
                } else if (sum > twoTarget) {
                    right--;
                } else {
                    res.push([nums[i], nums[j], nums[left], nums[right]]);
                    do {
                        left++;
                    } while (left < right && nums[left] === nums[left - 1]);
                    do {
                        right--;
                    } while (left < right && nums[right] === nums[right + 1]);
                }
            }
        }
    }

    return res;
};

console.log(fourSum([1, 0, -1, 0, -2, 2], 0));
console.log(fourSum([2, 2, 2, 2, 2], 8));