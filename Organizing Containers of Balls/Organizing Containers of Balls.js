function organizingContainers(container) {
    const n = container.length;
    const containerCapacity = new Array(n).fill(0);
    const ballTypes = new Array(n).fill(0);

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            containerCapacity[i] += container[i][j]; // total balls in container i
            ballTypes[j] += container[i][j];        // total balls of type j
        }
    }

    containerCapacity.sort((a, b) => a - b);
    ballTypes.sort((a, b) => a - b);

    return containerCapacity.join() === ballTypes.join() ? "Possible" : "Impossible";
}
// Example usage:
// console.log(organizingContainers([[1, 1], [1, 1]])); // Output: Possible
// console.log(organizingContainers([[0, 2], [1, 1]])); // Output: Impossible
// console.log(organizingContainers([[1, 3, 1], [2, 1, 2], [3, 3, 3]])); // Output: Possible
// --- IGNORE ---