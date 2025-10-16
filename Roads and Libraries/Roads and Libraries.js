function roadsAndLibraries(n, c_lib, c_road, cities) {
    if (c_lib <= c_road) {
        // It's cheaper to build a library in every city
        return n * c_lib;
    }
    // Build a graph
    const graph = Array.from({ length: n }, () => []);
    for (const [u, v] of cities) {
        graph[u - 1].push(v - 1);
        graph[v - 1].push(u - 1);
    }
    let visited = Array(n).fill(false);
    let cost = 0;

    function dfs(node) {
        let stack = [node];
        let count = 0;
        while (stack.length) {
            let curr = stack.pop();
            if (!visited[curr]) {
                visited[curr] = true;
                count++;
                for (let neigh of graph[curr]) {
                    if (!visited[neigh]) stack.push(neigh);
                }
            }
        }
        return count;
    }

    for (let i = 0; i < n; i++) {
        if (!visited[i]) {
            // For each connected component: 1 library, (component size-1) roads
            let componentSize = dfs(i);
            cost += c_lib + (componentSize - 1) * c_road;
        }
    }
    return cost;
}
