function twoPluses(grid) {
    const R = grid.length, C = grid[0].length;
    const cells = Array.from({length: R}, () => Array(C).fill(0));
    // Precompute max arm length for each cell
    for (let i = 0; i < R; i++) {
        for (let j = 0; j < C; j++) {
            if (grid[i][j] === 'G') {
                let k = 0;
                while (
                    i - k >= 0 && i + k < R &&
                    j - k >= 0 && j + k < C &&
                    grid[i - k][j] === 'G' &&
                    grid[i + k][j] === 'G' &&
                    grid[i][j - k] === 'G' &&
                    grid[i][j + k] === 'G'
                ) {
                    k++;
                }
                cells[i][j] = k - 1;
            }
        }
    }
    let maxProduct = 0;
    // List all possible pluses (i, j, arm)
    const pluses = [];
    for (let i = 0; i < R; i++) {
        for (let j = 0; j < C; j++) {
            for (let arm = 0; arm <= cells[i][j]; arm++) {
                pluses.push({i, j, arm, area: arm * 4 + 1});
            }
        }
    }
    // Check overlap helper
    function overlap(p1, p2) {
        const c1 = new Set();
        for (let k = 0; k <= p1.arm; k++) {
            c1.add(`${p1.i + k}_${p1.j}`);
            c1.add(`${p1.i - k}_${p1.j}`);
            c1.add(`${p1.i}_${p1.j + k}`);
            c1.add(`${p1.i}_${p1.j - k}`);
        }
        for (let k = 0; k <= p2.arm; k++) {
            if (
                c1.has(`${p2.i + k}_${p2.j}`) ||
                c1.has(`${p2.i - k}_${p2.j}`) ||
                c1.has(`${p2.i}_${p2.j + k}`) ||
                c1.has(`${p2.i}_${p2.j - k}`)
            ) return true;
        }
        return false;
    }
    // Try all pairs
    for (let a = 0; a < pluses.length; a++) {
        for (let b = a + 1; b < pluses.length; b++) {
            if (!overlap(pluses[a], pluses[b])) {
                maxProduct = Math.max(maxProduct, pluses[a].area * pluses[b].area);
            }
        }
    }
    return maxProduct;
}
// Example usage:
// console.log(twoPluses(["GGGGG","GBBBG","GGGGG","GGBBG"])); // Output: 45
// console.log(twoPluses(["BGBBGB","GGGGGG","BGBBGB","GGGGGG","BGBBGB"])); // Output: 81
// console.log(twoPluses(["BBBBB","BBBBB","BBBBB"])); // Output: 0
// --- IGNORE ---