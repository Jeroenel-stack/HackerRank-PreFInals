Check if the array is sorted:

If the array is already sorted in ascending order, the current player loses (Grundy number is 0).
Recursively compute Grundy numbers:

For each possible move (removing one element from the array), recursively compute the Grundy number of the resulting array.
Store Grundy numbers in a memoization map to avoid recomputation.
Calculate the minimum excludant (mex):

For all Grundy numbers from possible moves, find the smallest non-negative integer not present (mex).
Determine the winner:

If the Grundy number for the initial array is not zero, the first player (Alice) can force a win.
Otherwise, the second player (Bob) wins.
Summary:
Recursively calculate Grundy numbers for all possible moves using memoization.
If the initial array's Grundy number is non-zero, Alice wins; otherwise, Bob wins.