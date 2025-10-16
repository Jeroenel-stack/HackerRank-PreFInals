Initialize:

endsWithX: Number of arrays of length 1 ending with x.
endsWithNotX: Number of arrays of length 1 ending with any value except x.
If x == 1, set endsWithX = 1, endsWithNotX = 0; else, endsWithX = 0, endsWithNotX = 1.
Iterate from 2 to n:

For each position:
newEndsWithX = endsWithNotX
(To end with x, previous must not be x.)
newEndsWithNotX = (endsWithX * (k-1) + endsWithNotX * (k-2)) % MOD
(To end with not x, previous could be x (choose any of k-1 not x), or not x (choose any of k-2 not previous or x).)
Update endsWithX and endsWithNotX.
Return:

The number of arrays of length n ending with x (endsWithX).
Summary: