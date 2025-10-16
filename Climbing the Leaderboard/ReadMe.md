Algorithm: Shortest Paths Using BFS with Edge Cost

Build an adjacency list:

For each edge between u and v, add v to the adjacency list of u and u to the adjacency list of v.

Initialize a distance array for all nodes:

Set each distance to -1. This means unreachable.

Set dist[s] = 0 for the starting node s.

Initialize an empty queue and add starting node s:

This queue will process nodes in BFS order.

While there are nodes in the queue:

Remove the node from the front.

For each neighbor of this node:

If it hasn't been visited (dist[neighbor] === -1):

Set its distance to dist[node] + 6 (each edge has a cost of 6).

Add the neighbor to the queue.

Prepare the result:

For each node except the starting node:

Add its distance to the result.

Return the result array.

