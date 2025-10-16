Calculate total balls in each container:

For each container i, sum all balls in row i (containerCapacity[i]).
Calculate total balls of each type:

For each ball type j, sum all balls in column j (ballTypes[j]).
Sort both arrays:

Sort containerCapacity and ballTypes in ascending order.
Compare sorted arrays:

If they are identical, it is possible to organize the balls so each container contains only one type.
Otherwise, it is impossible.
Summary:
If the multiset of container capacities matches the multiset of ball type totals, output "Possible".
Otherwise, output "Impossible".