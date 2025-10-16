function cost(B) {
    let n = B.length;
    let low = 0, high = 0;

    for (let i = 1; i < n; i++) {
        let low2 = Math.max(low, high + Math.abs(1 - B[i-1]));
        let high2 = Math.max(low + Math.abs(B[i] - 1), high + Math.abs(B[i] - B[i-1]));
        low = low2;
        high = high2;
    }
    return Math.max(low, high);
}
