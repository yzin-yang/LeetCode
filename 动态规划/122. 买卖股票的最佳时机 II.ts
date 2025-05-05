// dp[i][1]: 第 i 天持有股票的最大收益
// dp[i][0]: 第 i 天未持有股票的最大收益
// dp[i][1] = max(dp[i-1][1], dp[i-1][0]-prices[i])
// dp[i][0] = max(dp[i-1][0], dp[i-1][1]+prices[i])
// dp[0][1] = -prices[i]
// dp[0][0] = 0
function maxProfit1(prices: number[]): number {
    const len = prices.length;
    const dp: number[][] = new Array(len).fill(0).map(() => new Array(2).fill(0));
    dp[0][1] = -prices[0];
    dp[0][0] = 0;
    for (let i = 1; i < len; i++) {
        dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][0] - prices[i]);
        dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] + prices[i]);
    }
    return dp[len - 1][0];
};

// 空间复杂度优化
function maxProfit2(prices: number[]): number {
    const len = prices.length;
    let profit1 = -prices[0];
    let profit0 = 0;
    for (let i = 1; i < len; i++) {
        const pre1 = profit1;
        const pre0 = profit0;
        profit1 = Math.max(pre1, pre0 - prices[i]);
        profit0 = Math.max(pre0, pre1 + prices[i]);
    }
    return profit0;
};

// 暴力解
function maxProfit(prices: number[]): number {
    const len = prices.length;
    let max = 0;
    const operation = (index: number, state: number, profit: number) => {
        if (index >= len) {
            max = Math.max(max, profit);
            return;
        }
        if (state === 0) {
            // 未持有
            operation(index + 1, 0, profit);
            operation(index + 1, 1, profit - prices[index]);
        } else {
            // 已持有
            operation(index + 1, 1, profit);
            operation(index + 1, 0, profit + prices[index]);
        }
    }
    operation(0, 0, 0);

    return max;
};

console.log(maxProfit([7,1,5,3,6,4]));
console.log(maxProfit([1,2,3,4,5]));
console.log(maxProfit([7,6,4,3,1]));