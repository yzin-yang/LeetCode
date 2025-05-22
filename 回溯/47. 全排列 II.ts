function permuteUnique(nums: number[]): number[][] {
    const res: number[][] = [];
    nums.sort((a, b) => a - b);
    const helper = (arr: number[], used: boolean[]) => {
        if (arr.length === nums.length) {
            res.push([...arr]);
            return;
        }
        // interface LevelUsed {
        //     [key: number]: boolean;
        // }
        // const levelUsed: LevelUsed = {};
        for (let i = 0; i < nums.length; i++) {
            // 同层次没有选过相同数字
            if (i > 0 && nums[i] === nums[i - 1] && !used[i - 1]) {
                continue;
            }
            // if (levelUsed[nums[i]]) {
            //     continue;
            // }
            if (used[i]) {
                continue;
            }
            arr.push(nums[i]);
            used[i] = true;
            // levelUsed[nums[i]] = true;
            helper(arr, used);
            arr.pop();
            used[i] = false;
        }
    }
    helper([], []);
    return res;
};

console.log(permuteUnique([1, 1, 2]));
console.log(permuteUnique([1, 2, 3]));