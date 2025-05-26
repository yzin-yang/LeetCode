// 动态规划
// up[i]：以 i 结尾的摆动序列（上升）最大长度
// down[i]：以 i 结尾的摆动序列（下降）最大长度
// up[i] = nums[i] <= nums[i-1] ? up[i-1] : max(up[i-1], down[i-1] + 1)
// down[i] = nums[i] >= nums[i-1] ? down[i-1] : max(down[i-1], up[i-1] + 1)
function wiggleMaxLength(nums: number[]): number {
    const n = nums.length;
    if (n < 2) {
        return n;
    }
    const up: number[] = new Array(n).fill(0);
    const down: number[] = new Array(n).fill(0);
    up[0] = 1;
    down[0] = 1;
    for (let i = 1; i < n; i++) {
        if (nums[i] > nums[i - 1]) {
            up[i] = Math.max(up[i - 1], down[i - 1] + 1);
            down[i] = down[i - 1];
        } else if (nums[i] < nums[i - 1]) {
            up[i] = up[i - 1];
            down[i] = Math.max(down[i - 1], up[i - 1] + 1);
        } else {
            up[i] = up[i - 1];
            down[i] = down[i - 1];
        }
    }

    return Math.max(up[n - 1], down[n - 1]);
}

// 贪心
function wiggleMaxLength2(nums: number[]): number {
    if (nums.length < 2) {
        return nums.length;
    }
    let flag = 0;
    let count = 1;
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] - nums[i - 1] > 0 && flag !== 1) {
            flag = 1;
            count++;
        }
        if (nums[i] - nums[i - 1] < 0 && flag !== -1) {
            flag = -1;
            count++;
        }
    }

    return count;
}
// 回溯
function wiggleMaxLength1(nums: number[]): number {
    if (nums.length < 2) {
        return nums.length;
    }
    if (nums.length === 2) {
        return nums[1] !== nums[0] ? 2 : 1;
    }

    let max = 0;
    const helper = (subArr: number[], startIndex: number) => {
        if (subArr.length + nums.length - startIndex <= max) {
            return;
        }

        if (startIndex === nums.length) {
            max = Math.max(max, subArr.length);
            return;
        }


        for (let i = startIndex; i < nums.length; i++) {
            if (
                subArr.length === 0 ||
                (subArr.length === 1 && nums[i] !== subArr[0])
                || (subArr.length >= 2 && (nums[i] - subArr[subArr.length - 1]) * (subArr[subArr.length - 1] - subArr[subArr.length - 2]) < 0)
            ) {
                subArr.push(nums[i]);
                helper(subArr, i + 1);
                subArr.pop();
            }
        }
    }
    helper([], 0);

    return max;
};

console.log(wiggleMaxLength([1, 7, 4, 9, 2, 5]));
console.log(wiggleMaxLength([1, 17, 5, 10, 13, 15, 10, 5, 16, 8]));
console.log(wiggleMaxLength([1, 2, 3, 4, 5, 6, 7, 8, 9]));