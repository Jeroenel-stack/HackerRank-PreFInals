Build the graph:

Create an adjacency list for n astronauts.
For each pair [a, b] in astronaut, add an edge between a and b.
Find connected components:

Use DFS to find all groups (countries) of astronauts.
For each unvisited astronaut, run DFS to get the size of their group.
Store all group sizes in component_sizes.
Count valid pairs:

For each group size, count pairs with astronauts from different groups.
Use a running sum: for each size, add sum * size to total, then add size to sum.
Return the total number of valid pairs.