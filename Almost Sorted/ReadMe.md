Algorithm to Determine If the Array Can Be Sorted by a Single Swap or Reverse:

Create a sorted copy of the input array for comparison.

Find the first and last indices where the input differs from the sorted array:

Start from the left, increment while both arrays match, store position as l.

Start from the right, decrement while both arrays match, store position as r.

If l > r:

The array is already sorted.

Output "yes" and stop.

Attempt a single swap:

Swap the elements at positions l and r in the original array.

If the array matches the sorted array after the swap:

Output "yes" and "swap l+1 r+1" (1-based positions).

Stop.

Otherwise, swap back.

Attempt a reverse:

Reverse the subarray from l to r (inclusive).

If the array matches the sorted array after the reverse:

Output "yes" and "reverse l+1 r+1" (1-based positions).

Stop.

If both attempts fail:

Output "no".