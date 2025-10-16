Define all 8 directions the queen can move:

Vertical, horizontal, and diagonal directions.
Convert obstacles to a set for fast lookup.

For each direction:

Start from the queen's position.
Move one step at a time in that direction.
Stop if you reach the edge of the board or an obstacle.
Count each valid square the queen can attack.
Sum up all attackable squares and return the result.

Summary:
For each direction, move step by step until blocked by the board edge or an obstacle, counting all reachable squares.
Return the total count.