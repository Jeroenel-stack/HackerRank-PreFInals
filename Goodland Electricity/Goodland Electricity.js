function pylons(k, arr) {
    let n = arr.length;
    let plants = 0;
    let i = 0;
    
    while (i < n) {
        // Find the farthest city (in range) where we can put a plant
        let loc = -1;
        for (let j = Math.min(i + k - 1, n - 1); j >= Math.max(i - k + 1, 0); j--) {
            if (arr[j] === 1) {
                loc = j;
                break;
            }
        }
        if (loc === -1) return -1; // Impossible
        plants += 1;
        i = loc + k; // Next uncovered city
    }
    return plants;
}
