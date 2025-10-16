function prims(n, edges, start) {
    // Build adjacency list with weights
    let adj = Array.from({length: n+1}, () => []);
    for (const [u, v, w] of edges) {
        adj[u].push({node:v, weight:w});
        adj[v].push({node:u, weight:w});
    }

    let visited = Array(n+1).fill(false);
    let minHeap = [];
    let total = 0;

    // Helper to push edges from a node to heap
    function pushEdges(u) {
        for (const {node:v, weight:w} of adj[u]) {
            if (!visited[v]) {
                minHeap.push([w, v]);
            }
        }
    }

    // Prim's - push start node edges
    visited[start] = true;
    pushEdges(start);

    // Simulate min heap by sort (acceptable for size n<=300)
    while (minHeap.length > 0) {
        minHeap.sort((a, b) => a[0] - b[0]);
        const [w, v] = minHeap.shift();
        if (!visited[v]) {
            total += w;
            visited[v] = true;
            pushEdges(v);
        }
    }

    return total;
}
