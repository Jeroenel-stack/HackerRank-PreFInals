If library cost is less than or equal to road cost:

Build a library in every city.
Total cost = n * c_lib.
Else (roads may save money):

Build a graph of cities and roads.
For each unvisited city, use DFS to find the size of its connected component.
For each component:
Build one library.
Connect the rest of the cities in the component with roads (componentSize - 1 roads).
Add c_lib + (componentSize - 1) * c_road to total cost.
Return the total cost.

Summary:
If libraries are cheaper, build one in every city.
Otherwise, for each connected group of cities, build one library and connect the rest with roads.
Return the minimum total cost.