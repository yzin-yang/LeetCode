// dp[i]：n个节点的二叉搜索树种类数
// dp[i] = dp[0]*dp[i-1] + d[1]*dp[i-2] + ... + dp[i-1]*dp[0]
// dp[0] = 1
// dp[1] = 1
function numTrees(n: number): number {
    const dp: number[] = new Array(n + 1).fill(0);
    dp[0] = 1
    for (let i = 0; i <= n; i++) {
        for (let j = 0; j < i; j++) {
            dp[i] += dp[j] * dp[i - j - 1];
        }
    }
    return dp[n];
};

// 递归记忆解
// https://leetcode.cn/problems/unique-binary-search-trees/solutions/330990/shou-hua-tu-jie-san-chong-xie-fa-dp-di-gui-ji-yi-h/?envType=study-plan-v2&envId=dynamic-programming
// 种类数只与子树大小有关
function numTrees1(n: number): number {
    const memo = new Map();
    const recur = (n: number) => {
        if (n <= 1) {
            return 1;
        }
        if (memo.has(n)) {
            return memo.get(n);
        }
        let count = 0;
        for (let i = 0; i < n; i++) {
            let left = recur(i);
            let right = recur(n - i - 1)
            count += left * right;
        }
        memo.set(n, count);
        return count;
    }

    return recur(n);
};

console.log(numTrees(1));
console.log(numTrees(2));
console.log(numTrees(3));
console.log(numTrees(4));
