function surfaceArea(A) {
    let H = A.length;
    let W = A[0].length;
    let area = 0;

    // Top and bottom
    area += H * W * 2;

    // Sides
    for (let i = 0; i < H; i++) {
        for (let j = 0; j < W; j++) {
            // Up
            area += i === 0 ? A[i][j] : Math.max(0, A[i][j] - A[i - 1][j]);
            // Down
            area += i === H - 1 ? A[i][j] : Math.max(0, A[i][j] - A[i + 1][j]);
            // Left
            area += j === 0 ? A[i][j] : Math.max(0, A[i][j] - A[i][j - 1]);
            // Right
            area += j === W - 1 ? A[i][j] : Math.max(0, A[i][j] - A[i][j + 1]);
        }
    }
    return area;
}
