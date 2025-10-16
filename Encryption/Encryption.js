function encryption(s) {
    s = s.replace(/\s/g, ""); // Remove spaces
    const L = s.length;
    const rows = Math.floor(Math.sqrt(L));
    const cols = Math.ceil(Math.sqrt(L));
    const r = (rows * cols < L) ? rows + 1 : rows;

    let result = [];
    for (let c = 0; c < cols; c++) {
        let word = '';
        for (let i = 0; i < L; i += cols) {
            if (i + c < L) word += s[i + c];
        }
        result.push(word);
    }
    return result.join(" ");
}
// Example usage:
// console.log(encryption("have a nice day")); // Output: "hae and via ecy"
// console.log(encryption("feed the dog")); // Output: "fto ehg ee dd"
// console.log(encryption("chill out")); // Output: "clu hlt io"
// --- IGNORE ---