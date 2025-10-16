Count inversions:

For each pair of indices (i, j) with i < j, if A[i] > A[j], increment inversion count.
Check if inversion count is even:

If the total number of inversions is even, the array can be sorted using allowed rotations.
If odd, it cannot be sorted.
Return "YES" if even, "NO" if odd.