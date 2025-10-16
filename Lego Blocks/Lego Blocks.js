function legoBlocks(n, m) {
    const MOD = BigInt(1e9 + 7);

    // DP for ways to build a row of length j
    const F = Array(m + 1).fill(0n);
    F[0] = 1n;
    for (let j = 1; j <= m; j++) {
        for (let b = 1; b <= 4; b++) {
            if (j - b >= 0)
                F[j] = (F[j] + F[j - b]) % MOD;
        }
    }

    // Ways to build wall ignoring cracks
    const G = Array(m + 1).fill(0n);
    for (let j = 1; j <= m; j++) {
        G[j] = F[j] ** BigInt(n) % MOD;
    }

    // Inclusion-exclusion for stability
    const S = Array(m + 1).fill(0n);
    S[0] = 1n;
    for (let j = 1; j <= m; j++) {
        S[j] = G[j];
        for (let k = 1; k < j; k++) {
            S[j] = (S[j] - S[k] * G[j - k] % MOD + MOD) % MOD;
        }
    }

    return Number(S[m]);
}
