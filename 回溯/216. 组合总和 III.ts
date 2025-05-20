function combinationSum3(k: number, n: number): number[][] {
    const res: number[][] = [];
    const helper = (cur: number, arr: number[], sum: number) => {
        if (sum > n) {
            return;
        }
        if (arr.length === k) {
            if (sum === n) {
                res.push([...arr]);
            }
            return;
        }
        const max = 9 - (k - arr.length) + 1;
        for (let i = cur; i <= max; i++) {
            arr.push(i);
            helper(i + 1, arr, sum + i);
            arr.pop();
        }
    }
    helper(1, [], 0);
    return res;
};

console.log(combinationSum3(3, 7));
console.log(combinationSum3(3, 9));
console.log(combinationSum3(4, 1));