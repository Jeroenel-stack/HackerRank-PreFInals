function minimumBribes(q) {
    let bribes = 0;
    for (let i = q.length - 1; i >= 0; i--) {
        // If anyone has moved forward more than 2 spaces, it's too chaotic
        if (q[i] - (i+1) > 2) {
            console.log("Too chaotic");
            return;
        }
        // Count how many people were bribed to overtake q[i]
        // Only check up to two positions before i
        for (let j = Math.max(0, q[i]-2); j < i; j++) {
            if (q[j] > q[i]) bribes++;
        }
    }
    console.log(bribes);
}
