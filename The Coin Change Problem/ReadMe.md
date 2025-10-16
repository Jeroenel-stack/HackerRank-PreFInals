Initialize a DP array:

dp[i] stores the number of ways to make amount i.
Set dp[0] = 1 (one way to make zero amount).
For each coin in c:

For each amount i from coin to n:
Add dp[i - coin] to dp[i] (ways to make i by adding this coin).
Return dp[n] as the answer.

Summary:
Use dynamic programming to count the number of ways to make amount n using the given coins.
For each coin, update the ways to make each amount.
Return the total ways for amount n.