function countArray(n, k, x) {
    const MOD = 1000000007;
    let endsWithX = x === 1 ? 1 : 0;
    let endsWithNotX = x === 1 ? 0 : 1;

    for (let i = 2; i <= n; i++) {
        let newEndsWithX = endsWithNotX;
        let newEndsWithNotX = ((endsWithX * (k - 1)) % MOD + (endsWithNotX * (k - 2)) % MOD) % MOD;
        endsWithX = newEndsWithX;
        endsWithNotX = newEndsWithNotX;
    }
    return endsWithX;
}
// Example usage:
// console.log(countArray(3, 2, 1)); // Output: 1
// console.log(countArray(4, 3, 2)); // Output: 6
// console.log(countArray(2, 4, 4)); // Output: 3
// --- IGNORE ---