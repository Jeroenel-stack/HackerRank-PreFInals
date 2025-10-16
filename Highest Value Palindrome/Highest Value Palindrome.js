function highestValuePalindrome(s, n, k) {
    let arr = s.split('');
    let changes = Array(n).fill(false);
    let l = 0, r = n - 1;

    // First pass: make palindrome (min changes)
    while (l < r) {
        if (arr[l] !== arr[r]) {
            let higher = arr[l] > arr[r] ? arr[l] : arr[r];
            arr[l] = arr[r] = higher;
            changes[l] = changes[r] = true;
            k--;
        }
        l++;
        r--;
    }
    if (k < 0) return "-1"; // Not enough changes

    // Second pass: try maximize value with spare changes
    l = 0; r = n - 1;
    while (l <= r) {
        if (l == r && k > 0 && arr[l] !== '9') {
            arr[l] = '9'; k--;
        }
        if (arr[l] < '9') {
            if (k >= (changes[l] || changes[r] ? 1 : 2)) {
                if (!changes[l] && !changes[r]) k -= 2;
                else k -= 1;
                arr[l] = arr[r] = '9';
            }
        }
        l++; r--;
    }

    return arr.join('');
}
// Example usage:
// console.log(highestValuePalindrome("3943", 4, 1)); // Output: "3993"
// console.log(highestValuePalindrome("092282", 6, 3)); // Output: "992299"
// console.log(highestValuePalindrome("0011", 4, 1)); // Output: "-1"
// --- IGNORE ---