function connectedCell(matrix) {
    const rows = matrix.length;
    const cols = matrix[0].length;
    let maxRegion = 0;

    // Helper to explore all connected cells using DFS
    function dfs(r, c) {
        // Out of bounds or already visited or cell is 0
        if (
            r < 0 || r >= rows ||
            c < 0 || c >= cols ||
            matrix[r][c] === 0
        ) {
            return 0;
        }

        // Mark cell as visited
        matrix[r][c] = 0;
        let size = 1;

        // All 8 directions
        for (let dr = -1; dr <= 1; dr++) {
            for (let dc = -1; dc <= 1; dc++) {
                if (dr !== 0 || dc !== 0) {
                    size += dfs(r + dr, c + dc);
                }
            }
        }
        return size;
    }

    // Iterate grid and find largest region
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (matrix[r][c] === 1) {
                maxRegion = Math.max(maxRegion, dfs(r, c));
            }
        }
    }
    return maxRegion;
}
