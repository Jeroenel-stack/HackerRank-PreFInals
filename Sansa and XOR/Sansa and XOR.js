function sansaXor(arr) {
    let n = arr.length;
    // For odd-sized arrays, xor all elements with odd index counts
    if (n % 2 === 0) return 0;
    let result = 0;
    for (let i = 0; i < n; i += 2) {
        result ^= arr[i];
    }
    return result;
}
