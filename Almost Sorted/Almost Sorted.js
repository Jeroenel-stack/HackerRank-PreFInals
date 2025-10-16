function almostSorted(arr) {
    const n = arr.length;
    let sorted = [...arr].sort((a, b) => a - b);

    // Find the first and last indices where arr differs from sorted
    let l = 0, r = n - 1;
    while (l < n && arr[l] === sorted[l]) l++;
    while (r > l && arr[r] === sorted[r]) r--;

    // If the array is already sorted
    if (l > r) return console.log("yes");

    // Try to swap
    [arr[l], arr[r]] = [arr[r], arr[l]];
    if (arr.join(",") === sorted.join(",")) {
        return console.log("yes\nswap " + (l + 1) + " " + (r + 1));
    }
    // Swap back and try to reverse
    [arr[l], arr[r]] = [arr[r], arr[l]];
    let toReverse = arr.slice(l, r + 1).reverse();
    let candidate = [...arr.slice(0, l), ...toReverse, ...arr.slice(r + 1)];
    if (candidate.join(",") === sorted.join(",")) {
        return console.log("yes\nreverse " + (l + 1) + " " + (r + 1));
    }
    return console.log("no");
}
// Example usage:
// almostSorted([1, 5, 4, 3, 2, 6]); // Output: yes\nreverse 2 5
// almostSorted([3, 1, 2]); // Output: no
// almostSorted([1, 2, 3, 4]); // Output: yes
// almostSorted([1, 3, 2, 4]); // Output: yes\nswap 2 3