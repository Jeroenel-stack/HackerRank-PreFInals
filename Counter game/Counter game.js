function counterGame(n) {
    let turns = 0;
    n = BigInt(n);
    while (n > 1n) {
        if ((n & (n - 1n)) === 0n) {
            // n is a power of 2
            n >>= 1n;
        } else {
            // subtract the largest power of 2 less than n
            let p = 1n;
            while (p << 1n <= n) p <<= 1n;
            n -= p;
        }
        turns++;
    }
    return turns % 2 === 1 ? "Louise" : "Richard";
}
