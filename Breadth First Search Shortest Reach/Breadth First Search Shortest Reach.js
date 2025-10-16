function bfs(n, m, edges, s) {
    // Build adjacency list
    const adj = Array.from({length: n+1}, () => []);
    for (const [u, v] of edges) {
        adj[u].push(v);
        adj[v].push(u);
    }
    
    // Distance array. -1 means unreachable
    const dist = Array(n+1).fill(-1);
    // BFS queue
    const queue = [];
    dist[s] = 0;
    queue.push(s);

    while (queue.length > 0) {
        const node = queue.shift();
        for (const neighbor of adj[node]) {
            if (dist[neighbor] === -1) {
                dist[neighbor] = dist[node] + 6; // Each edge cost is 6
                queue.push(neighbor);
            }
        }
    }
    
    // Prepare result (excluding s itself)
    const result = [];
    for (let i = 1; i <= n; i++) {
        if (i !== s) result.push(dist[i]);
    }
    return result;
}
