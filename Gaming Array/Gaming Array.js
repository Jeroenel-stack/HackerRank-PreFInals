function gamingArray(arr) {
    let count = 0;
    let maxSoFar = -Infinity;
    for (const x of arr) {
        if (x > maxSoFar) {
            count++;
            maxSoFar = x;
        }
    }
    // Bob starts first; if count is odd, Bob wins; else Andy wins
    return count % 2 === 1 ? "BOB" : "ANDY";
}
