// dp[i]: [0, i]内最小值
// dp[i] = min(prices[i], dp[i-1])
// dp[0] = prices[0]
function maxProfit2(prices: number[]): number {
    const len = prices.length;
    const dp: number[] = new Array(len).fill(0);
    dp[0] = prices[0];
    let max = 0;
    for (let i = 1; i < len; i++) {
        dp[i] = Math.min(prices[i], dp[i - 1]);
        max = Math.max(max, prices[i] - dp[i - 1]);
    }
    return max;
};

// 空间复杂度优化
function maxProfit(prices: number[]): number {
    const len = prices.length;
    let preMin = prices[0];
    let max = 0;
    for (let i = 1; i < len; i++) {
        if (preMin < prices[i]) {
            max = Math.max(max, prices[i] - preMin);
        } else {
            preMin = prices[i];
        }
    }
    return max;
};

// 暴力解
function maxProfit1(prices: number[]): number {
    const len = prices.length;
    let max = 0;
    for (let i = 0; i < len; i++) {
        for (let j = i + 1; j < len; j++) { 
            max = Math.max(max, prices[j] - prices[i])
        }
    }
    return max;
};

console.log(maxProfit([7,1,5,3,6,4]));
console.log(maxProfit([7,6,4,3,1]));
console.log(maxProfit([7]));