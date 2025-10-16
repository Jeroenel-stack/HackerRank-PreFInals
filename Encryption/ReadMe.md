Remove spaces from the input string.
Calculate the grid size:
rows = floor(sqrt(L))
cols = ceil(sqrt(L))
If rows * cols < L, increment rows by 1.
Build the encrypted message:
For each column c from 0 to cols-1:
Start with an empty string word.
For each row, pick the character at position i + c (where i increases by cols each time).
If i + c < L, append s[i + c] to word.
After finishing the column, add word to the result.
Join all column words with spaces and return.