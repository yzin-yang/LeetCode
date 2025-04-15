// dp[i] = min(dp[i-1] + cost[i-1], dp[i-2] + cost[i-2])
// dp[0] = 0
// dp[1] = 0
// dp[2] = min(dp[1] + 15, dp[0] + 10) = 10
// dp[3] = min(dp[2] + 20, dp[1] + 15) = 15
function minCostClimbingStairs(cost: number[]): number {
    const n = cost.length;
    let pre1 = 0;
    let pre2 = 0;
    let cur = 0;
    if (n < 2) {
        return 0;
    }
    for (let i = 2; i <= n; i++) {
        cur = Math.min(pre1 + cost[i - 1], pre2 + cost[i - 2]);
        pre2 = pre1;
        pre1 = cur;
    }
    return cur;
};
