Usage:

Pass two integer arrays a and b.

Returns one possible longest common subsequence as an array (guaranteed at least one non-empty).

How it works:

Uses standard 2D dynamic programming to build LCS table.

Backtracks from dp[n][m] to construct one valid LCS—any answer is acceptable.

Works for all HackerRank test cases, including multiple valid LCSes.