function quickestWayUp(ladders, snakes) {
    // Build the board mapping: by default, board[i] = i
    let board = Array(101).fill(0).map((_, i) => i);
    for (const [start, end] of ladders) board[start] = end;
    for (const [start, end] of snakes) board[start] = end;

    let visited = Array(101).fill(false);
    let queue = [];
    queue.push({pos: 1, moves: 0});
    visited[1] = true;

    while (queue.length > 0) {
        let {pos, moves} = queue.shift();
        if (pos === 100) return moves;
        for (let roll = 1; roll <= 6; roll++) {
            let next = pos + roll;
            if (next > 100) continue;
            let final = board[next];
            if (!visited[final]) {
                visited[final] = true;
                queue.push({pos: final, moves: moves + 1});
            }
        }
    }
    return -1;
}
