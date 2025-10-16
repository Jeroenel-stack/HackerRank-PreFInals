Define a recursive function countWays(sum, num):

Compute num^N.
If num^N > sum, return 0 (cannot use this number).
If num^N == sum, return 1 (found a valid combination).
Otherwise, recursively:
Count ways including num^N (countWays(sum - num^N, num + 1)).
Count ways excluding num^N (countWays(sum, num + 1)).
Start recursion with countWays(X, 1).

Return the total number of ways.

Summary:
Recursively try all numbers starting from 1, either including or excluding their Nth power, to sum up to X.
Return the count of valid combinations.