// dp[i][0]：第 i 天未持有股票的最大收益
// dp[i][1]：第 i 天持有股票的最大收益
// dp[i][0] = max(dp[i-1][0], dp[i-1][1] + prices[i])
// dp[i][1] = max(dp[i-1][1], dp[i-2][0] - prices[i])
// dp[0][0] = 0
// dp[0][1] = -prices[0]
function maxProfit(prices: number[]): number {
    const len = prices.length + 1;
    const dp: number[][] = new Array(len).fill(0).map(() => new Array(2).fill(0));
    dp[1][0] = 0;
    dp[1][1] = -prices[0];
    for (let i = 2; i < len; i++) {
        dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] + prices[i - 1]);
        dp[i][1] = Math.max(dp[i - 1][1], dp[i - 2][0] - prices[i - 1]);
    }
    return dp[len - 1][0];
};

// 暴力解
function maxProfit1(prices: number[]): number {
    let max = 0;
    //state 1：持有 2：未持有 3：冷冻期
    const operation = (index: number, state: number, cost: number) => {
        if (index >= prices.length) {
            max = Math.max(cost, max);
            return;
        }
        // if (state === 1) {
        //     operation(index + 1, 1, cost);
        //     operation(index + 1, 3, prices[index] + cost);
        // } else if (state === 2) {
        //     operation(index + 1, 1, -prices[index] + cost);
        //     operation(index + 1, 2, cost);
        // } else if (state === 3) {
        //     operation(index + 1, 2, cost);
        // }
        if (state === 1) {
            operation(index + 1, 1, cost);
            // 冷冻期可简化为卖后第二天未持有
            operation(index + 2, 2, prices[index] + cost);
        } else if (state === 2) {
            operation(index + 1, 1, -prices[index] + cost);
            operation(index + 1, 2, cost);
        }
    }
    operation(0, 2, 0);
    return max;
};

console.log(maxProfit([1, 2, 3, 0, 2]));
console.log(maxProfit([1, 3, 4]));
console.log(maxProfit([1]));