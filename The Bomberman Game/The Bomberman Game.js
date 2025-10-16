function bomberMan(n, grid) {
    const R = grid.length, C = grid[0].length;
    
    function explode(g) {
        let result = Array.from({length: R}, () => Array(C).fill('O'));
        for (let i = 0; i < R; i++) {
            for (let j = 0; j < C; j++) {
                if (g[i][j] === 'O') {
                    result[i][j] = '.';
                    if (i > 0) result[i-1][j] = '.';
                    if (i < R-1) result[i+1][j] = '.';
                    if (j > 0) result[i][j-1] = '.';
                    if (j < C-1) result[i][j+1] = '.';
                }
            }
        }
        return result.map(row => row.join(''));
    }

    if (n === 1) return grid;
    if (n % 2 === 0) return Array(R).fill('O'.repeat(C));

    // Compute first and second explosion patterns
    let afterFirst = explode(grid);
    let afterSecond = explode(afterFirst);

    // The pattern repeats every 4 after the 3rd second
    return (n % 4 === 3) ? afterFirst : afterSecond;
}
// Example usage:
// console.log(bomberMan(3, ["...",".O.","..."])); // Output: ["OOO","O.O","OOO"]
// console.log(bomberMan(5, ["...",".O.","..."])); // Output: ["...","...","..."]
// console.log(bomberMan(4, ["OOO","OOO","OOO"])); // Output: ["OOO","OOO","OOO"]
// console.log(bomberMan(1, ["..O",".OO","..."])); // Output: ["..O",".OO","..."]
// --- IGNORE ---