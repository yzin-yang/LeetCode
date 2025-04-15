// dp[i] = min(dp[i-1] + cost[i-1], dp[i-2] + cost[i-2])
// dp[0] = 0
// dp[1] = 0
// dp[2] = min(dp[1] + 15, dp[0] + 10) = 10
// dp[3] = min(dp[2] + 20, dp[1] + 15) = 15
function minCostClimbingStairs(cost: number[]): number {
    const dp = [0, 0];
    if (cost.length < 2) {
        return 0;
    }
    for (let i = 2; i <= cost.length; i++) {
        dp[i] = Math.min(dp[i - 1] + cost[i - 1], dp[i - 2] + cost[i - 2])
    }
    return dp.at(-1) || 0;
};
