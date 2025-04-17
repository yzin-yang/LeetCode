// dp[i][j]: 字符串在[i, j]区间内，最长回文子序列长度
// dp[i][j] = s[i]===s[j] ? dp[i+1][j-1]+2 : max(dp[i][j-1], dp[i+1][j])
// dp[x][x] = 1
function longestPalindromeSubseq(s: string): number {
    const n = s.length;
    if (n < 2) {
        return n;
    }
    const dp: number[][] = new Array(n).fill(0).map(() => new Array(n).fill(0));

    for (let i = n - 1; 0 <= i; i--) {
        dp[i][i] = 1;
        for (let j = i + 1; j < n; j++) {
            if (s[i] === s[j]) {
                dp[i][j] = dp[i + 1][j - 1] + 2;
            } else {
                dp[i][j] = Math.max(dp[i][j - 1], dp[i + 1][j])
            }
        }
    }

    return dp[0][n - 1];
};

console.log(longestPalindromeSubseq('cbbd'))