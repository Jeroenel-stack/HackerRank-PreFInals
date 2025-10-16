function powerSum(X, N) {
    function countWays(sum, num) {
        // Calculate num^N for the current step
        const power = Math.pow(num, N);
        if (power > sum) return 0;
        if (power === sum) return 1;
        // Either include num^N or skip to next number
        return countWays(sum - power, num + 1) + countWays(sum, num + 1);
    }
    return countWays(X, 1);
}
