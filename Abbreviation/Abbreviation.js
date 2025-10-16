function abbreviation(a, b) {
    // dp[i][j] means: is it possible for a[0...i-1] to match b[0...j-1]?
    let n = a.length, m = b.length;
    let dp = Array(n+1).fill().map(() => Array(m+1).fill(false));
    dp[0][0] = true;

    // It's always possible to delete all lowercase in a's prefix to match empty b
    for (let i = 1; i <= n; i++) {
        if (a[i-1] === a[i-1].toLowerCase())
            dp[i][0] = dp[i-1][0];
        // else remain false (cannot match if capital letters leftover)
    }

    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= m; j++) {
            // If upper(a[i-1]) matches b[j-1], can capitalize or match
            if (a[i-1].toUpperCase() === b[j-1]) {
                if (dp[i-1][j-1]) dp[i][j] = true;
            }
            // If a[i-1] is lowercase, could delete it
            if (a[i-1] === a[i-1].toLowerCase()) {
                if (dp[i-1][j]) dp[i][j] = true;
            }
        }
    }

    return dp[n][m] ? "YES" : "NO";
}
