function pairs(k, arr) {
    const set = new Set(arr);
    let count = 0;
    for (let num of arr) {
        if (set.has(num + k)) count++;
    }
    return count;
}
// Example usage:
// console.log(pairs(2, [1, 5, 3, 4, 2])); // Output: 3
// console.log(pairs(1, [1, 2, 3, 4])); // Output: 3
// console.log(pairs(3, [1, 2, 3, 4, 5])); // Output: 2
// --- IGNORE ---