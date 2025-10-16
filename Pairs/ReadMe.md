Create a set of all elements in arr for fast lookup.
Initialize a counter to zero.
For each number in arr:
Check if num + k exists in the set.
If yes, increment the counter.
Return the counter.
Summary:
Count how many pairs (a, b) exist in the array such that b - a = k.
For each element, check if its complement (num + k) is present.
Return the total count.