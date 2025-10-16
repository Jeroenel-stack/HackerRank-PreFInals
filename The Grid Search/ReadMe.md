Iterate over all possible starting positions in G:

For each row i from 0 to G.length - P.length
For each column j from 0 to G[i].length - P[0].length
Check if the pattern P matches at position (i, j):

For each row and column in P, compare G[i + r][j + c] with P[r][c].
If all characters match, return "YES".
**If no match is found after checking all positions, return "NO".

Summary:
Slide the pattern P over the grid G and check for a full match at each possible position.
Return "YES" if found, otherwise "NO".