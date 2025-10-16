How it works:

Use dynamic programming, where dp[i][j] is true if it's possible to make the first i letters of a into the first j letters of b.

At each step, you can either:

Capitalize a lowercase from a to match a letter in b.

Delete a lowercase from a.

Return "YES" if the transformation is possible, else "NO".