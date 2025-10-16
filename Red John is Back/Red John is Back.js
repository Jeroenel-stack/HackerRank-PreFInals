function redJohn(n) {
    // First, count ways to fill wall of size n (DP)
    const dp = Array(n + 1).fill(0);
    dp[0] = 1;
    for (let i = 1; i <= n; i++) {
        dp[i] += dp[i - 1];
        if (i >= 4) dp[i] += dp[i - 4];
    }
    const K = dp[n]; // Number of ways to fill wall

    // Count primes <= K (Sieve)
    if (K < 2) return 0;
    const isPrime = Array(K + 1).fill(true);
    isPrime[0] = isPrime[1] = false;
    for (let i = 2; i * i <= K; i++) {
        if (isPrime[i]) {
            for (let j = i * i; j <= K; j += i) {
                isPrime[j] = false;
            }
        }
    }
    let count = 0;
    for (let i = 2; i <= K; i++) {
        if (isPrime[i]) count++;
    }
    return count;
}
