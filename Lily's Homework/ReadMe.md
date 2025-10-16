Define a helper minSwaps(a) to count swaps needed to sort array a:

Create a sorted copy of a.
Build a map from value to index for quick lookup.
For each index i:
If a[i] is not in its sorted position:
Swap a[i] with the value that should be at position i.
Update the map for both swapped values.
Increment swap count.
Compute swaps for both ascending and descending order:

Call minSwaps on a copy of arr for ascending order.
Call minSwaps on a reversed copy of arr for descending order.
Return the minimum of the two swap counts.