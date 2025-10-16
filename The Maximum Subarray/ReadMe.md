Maximum Subarray Sum (Kadane's Algorithm):

Initialize maxCurrent and maxGlobal to the first element.
For each element from the second to the last:
Update maxCurrent as the maximum of the current element and maxCurrent + current element.
Update maxGlobal as the maximum of itself and maxCurrent.
Maximum Subsequence Sum:

Sum all positive numbers in the array.
If there are no positive numbers, set the subsequence sum to the largest (least negative) element.
Return both results as an array:
[maxGlobal, maxSubsequence]

Summary:
Find the largest sum of any contiguous subarray (Kadane's algorithm) and the largest sum of any non-contiguous subsequence (sum of positives or max element if all are negative).
Return both values.