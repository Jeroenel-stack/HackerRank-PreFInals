First pass:

Make the string a palindrome using the minimum number of changes.
For each pair (l, r) from outside in, if arr[l] !== arr[r], set both to the higher digit and mark as changed, decrement k.
If k becomes negative, return "-1" (not enough changes).
Second pass:

With remaining k, try to maximize the palindrome's value.
For each pair (l, r), if either is less than '9':
If both were changed before, only 1 change needed to set both to '9'.
If neither was changed, need 2 changes.
If enough k, set both to '9' and decrement k accordingly.
For the middle digit (if odd length), set to '9' if possible.
Return the resulting palindrome as a string