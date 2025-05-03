// dp[i][j]：i 下标结尾的字符串1和 j 下标结尾的字符串2的最长公共子序列
// dp[i][j] = text1[i]===text2[j] ? dp[i-1][j-1] + 1 : max(dp[i-1][j], dp[i][j-1])
function longestCommonSubsequence(text1: string, text2: string): number {
    const len1 = text1.length + 1;
    const len2 = text2.length + 1;
    const dp: number[][] = new Array(len1).fill(0).map(() => new Array(len2).fill(0));

    for (let i = 1; i < len1; i++) {
        for (let j = 1; j < len2; j++) {
            if (text1[i - 1] === text2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + 1;
            } else {
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
            }
        }
    }

    return dp[len1 - 1][len2 - 1];
};

console.log(longestCommonSubsequence("abcde", "ace"));

// 空间复杂度优化
// dp[i] = text1[i]===text2[j] ? preLongest : max(dp[i-1], dp[i])
function longestCommonSubsequence2(text1: string, text2: string): number {
    if (text1.length < text2.length) {
        const temp = text1;
        text1 = text2;
        text2 = temp;
    }
    const len1 = text1.length + 1;
    const len2 = text2.length + 1;
    const dp: number[] = new Array(len2).fill(0);
    for (let i = 1; i < len1; i++) {
        let preLongest = 0;
        for (let j = 1; j < len2; j++) {
            const temp = dp[j];
            if (text1[i - 1] === text2[j - 1]) {
                dp[j] = preLongest + 1;
            } else {
                dp[j] = Math.max(dp[j - 1], dp[j]);
            }
            preLongest = temp;
        }
    }

    return dp[len2 - 1];
};

// 暴力递归
function longestCommonSubsequence1(text1: string, text2: string): number {
    const getSubstring = (text: string) => {
        const set = new Set<string>();
        const backtrack = (index: number, str: string) => {
            if (index === text.length) {
                set.add(str);
                return;
            }
            backtrack(index + 1, str + text[index]);
            backtrack(index + 1, str);
        }
        backtrack(0, '');
        return set;
    }
    const set1 = getSubstring(text1);
    const set2 = getSubstring(text2);
    let maxLen = 0;
    for (const text of set1) {
        if (set2.has(text)) {
            maxLen = Math.max(maxLen, text.length);
        }
    }
    return maxLen;
};