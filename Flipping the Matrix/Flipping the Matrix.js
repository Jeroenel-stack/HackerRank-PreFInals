function flippingMatrix(matrix) {
    const n = matrix.length / 2;
    let maxSum = 0;

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            // For position (i,j), pick the max among its 4 possible positions after row/col flips!
            const candidates = [
                matrix[i][j],
                matrix[i][2 * n - 1 - j],
                matrix[2 * n - 1 - i][j],
                matrix[2 * n - 1 - i][2 * n - 1 - j]
            ];
            maxSum += Math.max(...candidates);
        }
    }
    return maxSum;
}
