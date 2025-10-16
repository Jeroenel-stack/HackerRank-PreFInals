function equal(arr) {
    const min = Math.min(...arr);
    let res = Infinity;

    for (let base = 0; base <= 4; base++) {
        let moves = 0;
        for (let num of arr) {
            let diff = num - (min - base);
            moves += Math.floor(diff / 5);
            diff %= 5;
            moves += Math.floor(diff / 2);
            diff %= 2;
            moves += diff;
        }
        res = Math.min(res, moves);
    }
    return res;
}
// Example usage:
// console.log(equal([2, 2, 3, 7])); // Output: 2
// console.log(equal([10, 7, 12])); // Output: 3
// console.log(equal([1, 1, 5])); // Output: 3
// --- IGNORE ---