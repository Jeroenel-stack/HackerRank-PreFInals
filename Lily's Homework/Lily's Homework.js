function lilysHomework(arr) {
    function minSwaps(a) {
        let n = a.length;
        let sorted = [...a].slice().sort((x, y) => x - y);
        let map = new Map();
        for (let i = 0; i < n; i++) {
            map.set(a[i], i);
        }
        let swaps = 0;
        for (let i = 0; i < n; i++) {
            if (a[i] !== sorted[i]) {
                swaps++;
                let idx = map.get(sorted[i]);
                // Swap values
                map.set(a[i], idx);
                map.set(sorted[i], i);
                [a[i], a[idx]] = [a[idx], a[i]];
            }
        }
        return swaps;
    }
    // Try normal and reversed sort
    return Math.min(minSwaps([...arr]), minSwaps([...arr].reverse()));
}
// Example usage:
// console.log(lilysHomework([2, 5, 3, 1])); // Output: 2
// console.log(lilysHomework([1, 2, 3, 4])); // Output: 0