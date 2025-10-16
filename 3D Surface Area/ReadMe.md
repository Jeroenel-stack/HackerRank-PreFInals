Initialize variables:

Set H to the number of rows in the grid A.

Set W to the number of columns in the grid A.

Set area to 0.

Add top and bottom surface area:

Add 
H
×
W
×
2
H×W×2 to area.

(Top and bottom faces for each cell.)

For each cell in the grid (row i, column j):

Up face:

If i is at the top row (0), add the cell height to area.

Else, add the positive difference between this cell's height and the cell above.

Down face:

If i is at the bottom row (H-1), add the cell height to area.

Else, add the positive difference between this cell's height and the cell below.

Left face:

If j is at the leftmost column (0), add the cell height to area.

Else, add the positive difference between this cell's height and the cell to the left.

Right face:

If j is at the rightmost column (W-1), add the cell height to area.

Else, add the positive difference between this cell's height and the cell to the right.

After all cells are processed, return area as the total surface area.