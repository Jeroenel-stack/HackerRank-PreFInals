function journeyToMoon(n, astronaut) {
    // Build the adjacency list
    const graph = Array.from({length: n}, () => []);
    for (const [a, b] of astronaut) {
        graph[a].push(b);
        graph[b].push(a);
    }

    const visited = Array(n).fill(false);
    const component_sizes = [];

    // DFS to find connected components (country groups)
    function dfs(node) {
        let stack = [node];
        let size = 0;
        visited[node] = true;
        while (stack.length > 0) {
            const curr = stack.pop();
            size += 1;
            for (const neighbor of graph[curr]) {
                if (!visited[neighbor]) {
                    visited[neighbor] = true;
                    stack.push(neighbor);
                }
            }
        }
        return size;
    }

    for (let i = 0; i < n; i++) {
        if (!visited[i]) {
            component_sizes.push(dfs(i));
        }
    }

    // Now count valid pairs (crossing countries)
    let total = 0;
    let sum = 0;
    for (const size of component_sizes) {
        total += sum * size;
        sum += size;
    }
    return total;
}
