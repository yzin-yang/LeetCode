function twoSum(nums: number[], target: number): number[] {
    interface TargetMap {
        [key: number]: number;
    }
    const hash: TargetMap = {};
    const res: number[] = [];
    for (let i = 0; i < nums.length; i++) {
        if (hash[nums[i]] !== undefined) {
            res.push(hash[nums[i]], i);
            return res;
        }
        hash[target - nums[i]] = i;
    }
    return res;
};

console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([3, 2, 4], 6));
console.log(twoSum([3, 3], 6));