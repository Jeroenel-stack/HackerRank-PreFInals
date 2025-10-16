function longestCommonSubsequence(a, b) {
    const n = a.length, m = b.length;
    const dp = Array(n+1).fill().map(() => Array(m+1).fill(0));
    
    // Build DP table
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= m; j++) {
            if (a[i-1] === b[j-1])
                dp[i][j] = dp[i-1][j-1] + 1;
            else
                dp[i][j] = Math.max(dp[i-1][j], dp[i][j-1]);
        }
    }
    
    // Backtrack to find one LCS
    let i = n, j = m, lcs = [];
    while (i > 0 && j > 0) {
        if (a[i-1] === b[j-1]) {
            lcs.push(a[i-1]);
            i--; j--;
        } else if (dp[i-1][j] >= dp[i][j-1]) {
            i--;
        } else {
            j--;
        }
    }
    
    return lcs.reverse();
}
