// dp[i][j]：[i, j]之间的字符串是否回文字符串
// dp[i][j] = dp[i+1][j-1] && str[i]===str[j]
// dp[x][x] = true
function longestPalindrome(s: string): string {
    const n = s.length;
    if (n <= 1) {
        return s;
    }
    const dp: boolean[][] = Array.from({ length: n }, () => Array.from({ length: n }));
    let maxLen = 1;
    let begin = 0;
    // i === j
    for (let i = 0; i < n; i++) {
        dp[i][i] = true;
    }
    // j - i === 1
    for (let i = 0; i < n - 1; i++) {
        dp[i][i + 1] = s[i] === s[i + 1];
        if (dp[i][i + 1] && maxLen < 2) {
            maxLen = 2;
            begin = i;
        }
    }
    // j - i > 1
    for (let i = n -2; 0 <= i; i--) {
        for (let j = i + 2; j < n; j++) {
            dp[i][j] = dp[i + 1][j - 1] && s[i] === s[j];
            if (dp[i][j] && maxLen < j - i + 1) {
                maxLen = j - i + 1;
                begin = i;
            }
        }
    }

    return s.substring(begin, begin + maxLen);
};

console.log(longestPalindrome('bcaacb'))