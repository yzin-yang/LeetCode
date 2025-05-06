// dp[i][1] 第 i 天持有股票的最大收益
// dp[i][0] 第 i 天没持有股票的最大收益
// dp[i][1] = max(dp[i-1][1], dp[i-1][0]-prices[i]-fee)
// dp[i][0] = max(dp[i-1][0], dp[i-1][1]+prices[i])
// dp[0][1] = -prices[0]
// dp[0][0] = 0
function maxProfit1(prices: number[], fee: number): number {
    const len = prices.length;
    const dp: number[][] = new Array(len).fill(0).map(() => new Array(2).fill(0));
    dp[0][0] = 0;
    dp[0][1] = -prices[0] - fee;
    for (let i = 1; i < len; i++) {
        dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] + prices[i]);
        dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][0] - prices[i] - fee);
    }
    return dp[len - 1][0];
};


// 空间复杂度优化
function maxProfit(prices: number[], fee: number): number {
    const len = prices.length;
    let profit0 = 0;
    let profit1 = -prices[0] - fee;
    for (let i = 1; i < len; i++) {
        [profit0, profit1] = [Math.max(profit0, profit1 + prices[i]), Math.max(profit1, profit0 - prices[i] - fee)]
    }
    return profit0;
};

console.log(maxProfit([1, 3, 2, 8, 4, 9], 2));
console.log(maxProfit([1,3,7,5,10,3], 3));