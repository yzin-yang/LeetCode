function findSubsequences(nums: number[]): number[][] {
    const res: number[][] = [];
    const helper = (arr: number[], startIndex: number) => {
        if (arr.length > 1) {
            res.push([...arr]);
        }
        const usedNums: Set<number> = new Set();
        for (let i = startIndex; i < nums.length; i++) {
            if (arr.length && arr[arr.length - 1] > nums[i]) {
                continue;
            }
            if (usedNums.has(nums[i])) {
                continue;
            }
            arr.push(nums[i]);
            usedNums.add(nums[i]);
            helper(arr, i + 1);
            arr.pop();
        }
    }
    helper([], 0);
    return res;
};

console.log(findSubsequences([4,6,7,7]));
console.log(findSubsequences([4,4,3,2,1]));