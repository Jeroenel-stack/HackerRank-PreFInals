Build the board mapping:

For each square, set its destination:
If it's the start of a ladder, map to the ladder's end.
If it's the start of a snake, map to the snake's end.
Otherwise, map to itself.
Breadth-First Search (BFS):

Start from square 1 with 0 moves.
Use a queue to track positions and moves taken.
For each position, try all possible dice rolls (1 to 6):
Move to the next square, then follow any ladder or snake.
If the square hasn't been visited, mark it and add to the queue with incremented move count.
If you reach square 100, return the number of moves.
If square 100 is unreachable, return -1.

Summary:
Model the board with ladders and snakes, then use BFS to find the minimum number of dice rolls needed to reach square 100.
Return the minimum moves, or -1 if impossible.