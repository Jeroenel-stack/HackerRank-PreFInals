function maxMin(k, arr) {
    arr.sort((a,b) => a-b);
    let minUnfair = Infinity;
    for (let i=0; i<=arr.length-k; i++) {
        const unfair = arr[i+k-1] - arr[i];
        if (unfair < minUnfair) minUnfair = unfair;
    }
    return minUnfair;
}
