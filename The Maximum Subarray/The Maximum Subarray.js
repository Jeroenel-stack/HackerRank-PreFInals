function maxSubarray(arr) {
    // Maximum subarray sum (Kadane's algorithm)
    let maxCurrent = arr[0], maxGlobal = arr[0];
    for (let i = 1; i < arr.length; i++) {
        maxCurrent = Math.max(arr[i], maxCurrent + arr[i]);
        maxGlobal = Math.max(maxGlobal, maxCurrent);
    }

    // Maximum subsequence sum (sum of all positives, or max if all negatives)
    let maxSubsequence = 0, hasPositive = false;
    for (let num of arr) {
        if (num > 0) {
            maxSubsequence += num;
            hasPositive = true;
        }
    }
    if (!hasPositive) {
        maxSubsequence = Math.max(...arr);
    }

    return [maxGlobal, maxSubsequence];
}
