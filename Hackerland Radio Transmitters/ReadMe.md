Sort the house positions (x).
Initialize transmitter count and index.
While there are houses left:
Place a transmitter to cover as many houses as possible to the right of current house (x[i] + k).
Move i forward to the farthest house within this range.
Place the transmitter at the last house within range (x[i-1]).
Move i forward to skip all houses covered by this transmitter (x[i-1] + k).
Increment transmitter count.
Repeat until all houses are covered.
Return the transmitter count.