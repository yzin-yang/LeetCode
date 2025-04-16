// dp[i][j]: 到达坐标(i,j)的路径数
// dp[i][j] = dp[i-1][j] + d[i][j-1]
// dp[0][x] = 1
// dp[x][0] = 1
// [1,1,1,1,1,1,1]
// [1,2,3,4,5,6,7]
// [1,3,6,10,15,21,28]
//一维优化
// dp[j] = dp[j-1] + dp[j]
function uniquePaths(m: number, n: number): number {
    if (m <= 1 || n <= 1) {
        return 1;
    }
    const dp = new Array(n).fill(1);
    for (let i = 1; i < m; i++){
        for (let j = 1; j < n; j++) {
            dp[j] = dp[j - 1] + dp[j];
        }
    }

    return dp[n - 1]
};

console.log(uniquePaths(3, 3))
