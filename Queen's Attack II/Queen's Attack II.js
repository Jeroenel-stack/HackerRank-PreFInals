function queensAttack(n, k, r_q, c_q, obstacles) {
    let directions = [
        [1, 0],   // down
        [0, 1],   // right
        [-1, 0],  // up
        [0, -1],  // left
        [1, 1],   // down-right
        [-1, -1], // up-left
        [1, -1],  // down-left
        [-1, 1]   // up-right
    ];
    let attackableSquares = 0;
    let obstacleSet = new Set(obstacles.map(([r, c]) => `${r},${c}`));
    for (let [dr, dc] of directions) {
        for (let step = 1; step < n; step++) {
            let newRow = r_q + dr * step;
            let newCol = c_q + dc * step;
            if (newRow < 1 || newRow > n || newCol < 1 || newCol > n || obstacleSet.has(`${newRow},${newCol}`)) {
                break;
            }
            attackableSquares++;
        }
    }
    return attackableSquares;

}
