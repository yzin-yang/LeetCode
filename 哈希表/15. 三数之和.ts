// 双指针，排序后相同元素可以跳过是常见的剪枝手法
function threeSum(nums: number[]): number[][] {
    nums.sort((a, b) => a - b);
    const res: number[][] = [];
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > 0) {
            // 排序后，如果当前大于 0，则后续也大于 0，和不可能为 0
            break;
        }
        if (i > 0 && nums[i] === nums[i - 1]) {
            continue;
        }
        let left = i + 1;
        let right = nums.length - 1;
        while (left < right) {
            const sum = nums[left] + nums[right] + nums[i];
            if (sum > 0) {
                right--;
            } else if (sum < 0) {
                left++;
            } else {
                res.push([nums[i], nums[left], nums[right]]);
                do {
                    left++;
                } while (left < right && nums[left] === nums[left - 1]);
                do {
                    right--;
                } while (left < right && nums[right] === nums[right + 1]);
            }
        }
    }

    return res;
}

// 哈希表，时间超限
function threeSum1(nums: number[]): number[][] {
    const LEN = 3;
    const checkSame = (res: number[][], ans: number[]) => {
        if (!res.length) {
            return false;
        }
        for (const item of res) {
            let count = 0;
            // 排序后可按位置比较
            for (let i = 0; i < LEN; i++) {
                if (item[i] === ans[i]) {
                    count++;
                }
            }
            if (count === LEN) {
                return true;
            }
        }
        return false;
    }
    const res: number[][] = [];
    interface HashMap {
        [key: number]: number;
    }
    nums.sort((a, b) => a - b);
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === nums[i - 1]) {
            continue;
        }
        const hash: HashMap = {};
        const target = -nums[i];
        for (let j = i + 1; j < nums.length; j++) {
            if (hash[nums[j]] !== undefined) {
                const ans = [nums[i], target - nums[j], nums[j]];
                if (!checkSame(res, ans)) {
                    res.push(ans);
                }
            }
            hash[target - nums[j]] = j;
        }
    }
    return res;
};

console.log(threeSum([-1, 0, 1, 2, -1, -4]));
console.log(threeSum([0, 1, 1]));
console.log(threeSum([0, 0, 0]));
console.log(threeSum([-4, -2, 1, -5, -4, -4, 4, -2, 0, 4, 0, -2, 3, 1, -5, 0]));