function combine(n: number, k: number): number[][] {
    const res: number[][] = [];
    const helper = (last: number, arr: number[]) => {
        // 剩余数字不够时，剪枝
        if (arr.length + n - last < k) {
            return;
        }
        if (arr.length === k) {
            res.push([...arr]);
            return;
        }
        const remainingSlots = k - arr.length;
        const maxI = n - remainingSlots + 1;
        for (let i = last + 1; i <= maxI; i++) {
            arr.push(i);
            helper(i, arr);
            arr.pop();
        }
        // const cur = last + 1;
        // arr.push(cur);
        // helper(cur, arr);
        // arr.pop();
        // helper(cur, arr);
    }
    helper(0, []);
    return res;
};

console.log(combine(4, 2));
console.log(combine(1, 1));