Find the minimum value in the array (min).
Try base values from 0 to 4:
For each base, consider target value min - base.
For each number in the array:
Calculate the difference from the target.
Count moves using largest denominations first:
Add as many 5s as possible (diff / 5).
Add as many 2s as possible (diff / 2).
Add remaining 1s (diff).
Sum moves for all numbers.
Track the minimum total moves across all bases.
Return the minimum moves found.