function maxProfit(prices: number[]): number {
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