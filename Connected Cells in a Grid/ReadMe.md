Initialize:

Get number of rows and columns.
Set maxRegion to 0.
Depth-First Search (DFS):

For a cell (r, c), if out of bounds or value is 0, return 0.
Mark cell as visited by setting matrix[r][c] = 0.
Initialize size = 1.
For all 8 directions (including diagonals), recursively call DFS for neighboring cells and add their sizes to size.
Return size.
Iterate through the grid:

For each cell (r, c):
If cell value is 1, call DFS to find the size of the connected region.
Update maxRegion if the region size is larger.
Return maxRegion.