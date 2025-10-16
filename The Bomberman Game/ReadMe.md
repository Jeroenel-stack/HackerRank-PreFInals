Initial state:

If n == 1, return the initial grid.
Even seconds:

If n is even, the grid is filled with bombs ('O' in every cell).
Odd seconds (n > 1):

The grid alternates between two explosion patterns after the initial state.
Compute the grid after the first explosion (afterFirst).
Compute the grid after the second explosion (afterSecond).
For n % 4 == 3, return afterFirst.
For n % 4 == 1, return afterSecond.
Explosion logic:

For each cell with a bomb, mark itself and its adjacent cells as exploded ('.').
Summary:
Simulate the grid for the first and second explosion patterns, then use the repeating cycle to determine the final grid for any n.
Return the correct grid based on the value of n.