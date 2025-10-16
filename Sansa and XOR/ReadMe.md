Explanation:

If the array length is even, each element appears an even number of times in all subarrays, so their XOR is 0.

If the array length is odd, each element at an even index (0-based) appears an odd number of times, so XOR those.

This passes all HackerRank test cases efficiently.