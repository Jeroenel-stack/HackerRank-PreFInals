Explanation:

Creates an adjacency list handling multiple edges.

Uses an array as a min-heap (sort operation is fast enough for small n).

Each time, selects the smallest-weight edge connecting to an unvisited node, adding its edges to the heap.

Continues until all nodes are added and returns the total MST weight.

This implementation passes all HackerRank requirements, including multiple edges between the same nodes.