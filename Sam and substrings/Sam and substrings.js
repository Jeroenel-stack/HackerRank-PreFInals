function substrings(n) {
    const MOD = 1000000007;
    let res = 0, f = 1, prev = 0;
    for (let i = n.length - 1; i >= 0; i--) {
        prev = (prev + parseInt(n[i]) * f) % MOD;
        res = (res + prev) % MOD;
        f = (f * 10 + 1) % MOD;
    }
    return res;
}
