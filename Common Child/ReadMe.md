Initialize:

Let n = length of s1, m = length of s2.
Create a 2D array dp of size (n+1) x (m+1) filled with zeros.
Dynamic Programming Table Filling:

For each i from 1 to n:
For each j from 1 to m:
If s1[i-1] == s2[j-1]:
Set dp[i][j] = dp[i-1][j-1] + 1
Else:
Set dp[i][j] = max(dp[i-1][j], dp[i][j-1])
Result:

The length of the longest common subsequence (common child) is dp[n][m].